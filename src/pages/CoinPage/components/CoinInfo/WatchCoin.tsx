import { useFavCoins } from "@/features/coin/coin-favorite/useFavCoin";
import type { CoinFavT } from "@/features/coin/coin-favorite/favoriteCoins";
import s from "./CoinInfo.module.scss";

type WatchCoinT = {
  coin: CoinFavT;
};

const WatchCoin = ({ coin }: WatchCoinT) => {
  const { addFavCoinF, deleteFavCoinF, isFavCoinF } = useFavCoins();
  const data = isFavCoinF(coin.id);
  return (
    <div className={s.watchcoin}>
      {!data.isFav ? (
        <button onClick={() => addFavCoinF(coin)}>Сохранить</button>
      ) : (
        <button onClick={() => deleteFavCoinF(coin.id)}>
          Удалить из избранного
        </button>
      )}
    </div>
  );
};

export default WatchCoin;
