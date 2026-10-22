import React from "react";
import s from "./SavedCurrencies.module.scss";
import { Link } from "react-router-dom";
import type { CoinFavT } from "@/features/coin/coin-favorite/favoriteCoins";
import { formatPrice } from "@/utils/formatPrice";
import { useCurrency } from "@/features/currency/context/CurrencyContext";
import { formatPercent } from "@/utils/formatPercent";
import ChangeIndicator from "@/components/shared/ChangeIndicator/ChangeIndicator";

type SavedCurrencyItemT = {
  coin: CoinFavT;
  deleteFavCoinF: (coinId: string) => void;
};

const SavedCurrencyItem = ({ coin, deleteFavCoinF }: SavedCurrencyItemT) => {
  const { currency } = useCurrency();
  return (
    <div className={s.savedCurrencyItem}>
      <Link to={`coin/${coin.id}`} className={s.savedCurrencyItem_nameAndImg}>
        <img src={coin.image.small} className={s.savedCurrencyItem_img} />
        <h2 className={s.savedCurrencyItem_name}>
          {coin?.localization?.ru || coin.name}
        </h2>
      </Link>
      <div className={s.savedCurrencyItem_priceInfo}>
        <span className={s.savedCurrencyItem_price}>
          {formatPrice(coin.price, currency)}
        </span>
        <ChangeIndicator
          percent={coin.price_change_percentage_24h_in_currency}
        />
      </div>
      <div className={s.savedCurrencyItem_remove}>
        <button
          className={s.savedCurrencyItem_removeBtn}
          onClick={() => deleteFavCoinF(coin.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default SavedCurrencyItem;
