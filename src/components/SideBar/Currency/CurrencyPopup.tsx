import React, { useEffect, useRef } from "react";
import s from "./Currency.module.scss";
import type { CurrenciesT } from "../../../CoinGeckoTypes";
import { currencyNames } from "../../../constants/currencies";

type CurrencyPopupT = {
  currencies: CurrenciesT | undefined;
  value: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  onOptionClick: (...args: any[]) => void;
  isLoading: boolean;
};

const CurrencyPopup = ({
  value,
  onInputChange,
  onOptionClick,
  isLoading,
  currencies,
}: CurrencyPopupT) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className={s.currencySelect}>
      <input
        ref={inputRef}
        placeholder="Поиск"
        className={s.currencySelect_input}
        value={value}
        onChange={onInputChange}
      />
      <div className={s.currencySelect_wrapper}>
        {isLoading && (
          <div className={s.currencySelect_softLoading}>Загрузка</div>
        )}
        {!currencies ||
          (currencies.length === 0 && (
            <div className={s.currencySelect_notFound}>Не найдено</div>
          ))}
        {currencies?.map((currencyId) => (
          <div
            onClick={() => onOptionClick(currencyId)}
            className={s.currencySelect_option}
          >
            {currencyNames[currencyId]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyPopup;
