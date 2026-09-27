import s from "./Currency.module.scss";
import { useGetCurrencies } from "../../../hooks/CoinGecko";
import { useCurrency } from "../../../context/CurrencyContext";
import { useSelect } from "../../../hooks/useSelect";
import { useSearch } from "../../../hooks/useSearch";

const Currency = () => {
  const { data, isLoading } = useGetCurrencies();

  const { currency, setCurrency } = useCurrency();
  const { value, onInputChange, setValue } = useSearch();
  const { open, setIsOpen, onOptionClick, wrapperRef } = useSelect(
    (c: string) => {
      setCurrency(c);
      setValue("");
    },
  );
  const filteredData = data
    ?.filter((cur) =>
      cur.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
    )
    .sort((a, b) => {
      if (a === "usd") return -1;
      if (b === "usd") return 1;
      return 0;
    });
  return (
    <div className={s.currency}>
      <div ref={wrapperRef} className={s.currency_wrapper}>
        Валюта:
        <button onClick={() => setIsOpen(true)} className={s.currency_btn}>
          {currency}
        </button>
        {open && (
          <div className={s.currencySelect}>
            <input
              placeholder="Поиск"
              className={s.currencySelect_input}
              value={value}
              onChange={onInputChange}
            />
            <div className={s.currencySelect_wrapper}>
              {isLoading && (
                <div className={s.currencySelect_softLoading}>Загрузка</div>
              )}
              {!data ||
                (data.length === 0 && (
                  <div className={s.currencySelect_notFound}>Не найдено</div>
                ))}
              {filteredData?.map((currencyName) => (
                <div
                  onClick={() => onOptionClick(currencyName)}
                  className={s.currencySelect_option}
                >
                  {currencyName}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Currency;
