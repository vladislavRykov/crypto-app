import React from "react";
import s from "./SavedCurrencies.module.scss";
import { useFavCoins } from "@/hooks/useFavCoin";
import { Link } from "react-router-dom";
import SavedCurrencyItem from "./SavedCurrencyItem";
const SavedCurrencies = () => {
  const { favCoins, deleteFavCoinF } = useFavCoins();
  return (
    <div className={s.savedCurrencies}>
      <h3 className={s.savedCurrencies_title}>Сохраненные валюты: </h3>
      {!favCoins || favCoins.length === 0 ? (
        <div>Нет монет</div>
      ) : (
        <div className={s.savedCurrencies_list}>
          {favCoins.map((coin) => (
            <SavedCurrencyItem
              deleteFavCoinF={deleteFavCoinF}
              key={coin.id}
              coin={coin}
            />
          ))}
          {/* {favCoins.map((coin) => (
            <SavedCurrencyItem key={coin.id} coin={coin} />
          ))}
          {favCoins.map((coin) => (
            <SavedCurrencyItem key={coin.id} coin={coin} />
          ))} */}
        </div>
      )}
    </div>
  );
};

export default SavedCurrencies;
