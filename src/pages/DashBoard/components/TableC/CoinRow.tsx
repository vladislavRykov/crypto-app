import React from "react";
import ChangeIndicator from "../../../../components/shared/ChangeIndicator/ChangeIndicator";
import { formatPrice } from "../../../../utils/formatPrice";
import { Link } from "react-router-dom";
import s from "./TableC.module.scss";
import type { CoinWithMarketDataT } from "../../../../CoinGeckoTypes";
import CoinSparkline from "./CoinSparkline";

type CoinRowT = {
  coin: CoinWithMarketDataT;
  idx: number;
  currency: string;
};

const CoinRow = ({ coin, idx, currency }: CoinRowT) => {
  return (
    <tr key={coin.id} className={s.row}>
      <td>{idx + 1}</td>
      <td className={s.row_coinsName}>
        <Link to={`/crypto-app/coin/${coin.id}`}>
          <img loading="lazy" src={coin.image} />
          {coin.name}
        </Link>
      </td>
      <td>{formatPrice(coin.current_price, currency)}</td>
      <td>
        <ChangeIndicator percent={coin.price_change_percentage_24h || 0} />
      </td>
      <td>{formatPrice(coin.market_cap, currency)}</td>
      <td>
        <Link className={s.row_graphLink} to={`/crypto-app/coin/${coin.id}`}>
          <CoinSparkline
            price_change_percentage_24h={coin.price_change_percentage_24h}
            sparkline_in_7d={coin.sparkline_in_7d}
          />
        </Link>
      </td>
    </tr>
  );
};

export default CoinRow;
