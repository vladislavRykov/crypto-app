import { useFavCoins } from "@/hooks/useFavCoin";
import type { CoinFavT } from "@/utils/coin-favorite/favoriteCoins";
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
