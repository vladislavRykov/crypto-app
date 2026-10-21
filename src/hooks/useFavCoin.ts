import {
  addFavCoin,
  getFavCoins,
  removeFavCoin,
  type CoinFavT,
} from "@/utils/coin-favorite/favoriteCoins";
import { useState } from "react";

export const useFavCoins = () => {
  const favCoinsLS = getFavCoins();
  const [favCoins, setFavCoins] = useState(favCoinsLS);

  const addFavCoinF = (coin: CoinFavT) => {
    const { ok } = addFavCoin(coin);
    ok && setFavCoins((prev) => (prev ? [...prev, coin] : [coin]));
  };
  const deleteFavCoinF = (coinId: string) => {
    const { ok } = removeFavCoin(coinId);
    ok &&
      setFavCoins((prev) =>
        prev ? prev.filter((coin) => coin.id !== coinId) : prev,
      );
  };

  const isFavCoinF = (coinId: string) => {
    if (!favCoins) return { isFav: false };
    const filteredFavCoins = favCoins.find((coin) => coin.id === coinId);

    return { isFav: !!filteredFavCoins };
  };

  return { favCoins, isFavCoinF, addFavCoinF, deleteFavCoinF };
};
