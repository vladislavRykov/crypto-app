import type { CryptoImages } from "@/api/types";
import { getlocalStorageData } from "@/services/storageService";

const KEY = "fav-coins";
const MAX_LENGTH = 10;

export type CoinFavT = {
  id: string;
  name: string;
  localization: { ru: string; en: string };
  image: CryptoImages;
  price_change_percentage_24h_in_currency: number;
  price: number;
};

export function getFavCoins(): CoinFavT[] | null {
  return getlocalStorageData(KEY);
}
export const saveFavCoins = (coins: CoinFavT[]) => {
  localStorage.setItem(KEY, JSON.stringify(coins));
};
export const addFavCoin = (coin: CoinFavT) => {
  const favCoins = getFavCoins();
  if (!favCoins) {
    saveFavCoins([coin]);
    return { ok: true };
  } else if (favCoins.length === MAX_LENGTH) {
    return { ok: false };
  } else {
    saveFavCoins([...favCoins, coin]);
  }
  return { ok: true };
};
export const removeFavCoin = (coinId: string) => {
  const favCoins = getFavCoins();
  if (!favCoins) return { ok: false };
  else if (favCoins.length === 0) return { ok: false };
  else {
    const filteredFavCoins = favCoins.filter((coin) => coin.id !== coinId);
    saveFavCoins(filteredFavCoins);
  }
  return { ok: true };
};
export const isFavCoin = (coinId: string): { isFav: boolean } => {
  const favCoins = getFavCoins();
  if (!favCoins) return { isFav: false };
  else {
    const filteredFavCoins = favCoins.find((coin) => coin.id === coinId);

    return { isFav: !!filteredFavCoins };
  }
};
