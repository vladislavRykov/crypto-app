import s from "./Currency.module.scss";
import { useGetCurrencies } from "../../../hooks/CoinGecko";
import { useCurrency } from "../../../context/CurrencyContext";
import { useSelect } from "../../../hooks/useSelect";
import { useSearch } from "../../../hooks/useSearch";
import { currencyNames } from "../../../constants/currencies";
import type { CurrencyT } from "../../../CoinGeckoTypes";
import CurrencyPopup from "./CurrencyPopup";

const Currency = () => {
  const { data, isLoading } = useGetCurrencies();
  const { currency, setCurrency } = useCurrency();
  const { value, onInputChange, setValue } = useSearch();
  const { open, setIsOpen, onOptionClick, wrapperRef } = useSelect(
    (c: CurrencyT) => {
      setCurrency(c);
      setValue("");
    },
  );
  const filteredData = data
    ?.filter((cur) =>
      currencyNames[cur]
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase()),
    )
    .sort((a, b) => {
      if (a === "usd") return -1;
      if (b === "usd") return 1;
      return 0;
    });

  return (
    <div className={s.currency}>
      <div ref={wrapperRef} className={s.currency_wrapper}>
        <span className={s.currency_btnLabel}>Валюта: </span>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className={s.currency_btn}
        >
          {currencyNames[currency]}
        </button>
        {open && (
          <CurrencyPopup
            value={value}
            onInputChange={onInputChange}
            onOptionClick={onOptionClick}
            isLoading={isLoading}
            currencies={filteredData}
          />
        )}
      </div>
    </div>
  );
};

export default Currency;
