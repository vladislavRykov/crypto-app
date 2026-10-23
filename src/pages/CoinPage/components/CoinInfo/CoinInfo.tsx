import s from "./CoinInfo.module.scss";
import { formatPrice } from "@/utils/formatPrice";
import ChangeIndicator from "@/components/shared/ChangeIndicator/ChangeIndicator";
import GoBackBtn from "@/components/shared/Buttons/GoBackBtn/GoBackBtn";
import CoinLinks from "./CoinLinks/CoinLinks";
import WatchCoin from "./WatchCoin";
import type { CoinT, CurrencyT } from "@/api/types";

type CoinInfoT = {
  coinData: CoinT;
  vs_currency: CurrencyT;
};
const CoinInfo = ({ coinData, vs_currency }: CoinInfoT) => {
  const price = coinData?.market_data?.current_price?.[vs_currency] || 0;

  const priceChange200d =
    coinData.market_data.price_change_percentage_200d_in_currency?.[
      vs_currency
    ] ?? 0;

  const watchCoin = {
    id: coinData.id,
    name: coinData.name,
    image: coinData.image,
    localization: coinData.localization,
    price,
    price_change_percentage_24h_in_currency:
      coinData?.market_data?.price_change_percentage_24h_in_currency?.[
        vs_currency
      ] ?? 0,
  };
  return (
    <div className={s.coinInfo}>
      <GoBackBtn />
      <div className={s.coinInfo_info}>
        <img className={s.coinInfo_img} src={coinData?.image?.thumb} />
        <h1 className={s.coinInfo_name}>
          {coinData?.localization?.ru || coinData?.localization?.en}
        </h1>
        <span className={s.coinInfo_symbol}>{coinData?.symbol}</span>
        <span className={s.coinInfo_rank}>№{coinData?.market_cap_rank}</span>
      </div>
      <div className={s.coinInfo_priceAndPercent}>
        <span className={s.coinInfo_price}>
          {formatPrice(price, vs_currency, { notation: "standard" })}{" "}
        </span>
        <ChangeIndicator percent={priceChange200d} period={"(200d)"} />
      </div>
      <CoinLinks links={coinData.links} />
      <WatchCoin coin={watchCoin} />
    </div>
  );
};

export default CoinInfo;
