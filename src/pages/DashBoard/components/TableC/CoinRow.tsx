import React, { useState } from "react";
import ChangeIndicator from "../../../../components/shared/ChangeIndicator/ChangeIndicator";
import { formatPrice } from "../../../../utils/formatPrice";
import { Link } from "react-router-dom";
import s from "./TableC.module.scss";
import type { CoinWithMarketDataT } from "../../../../CoinGeckoTypes";
import CoinSparkline from "./CoinSparkline";
import imagePlaceholder from "@/assets/placeholders/imagePlaceholder.png";

type CoinRowT = {
  coin: CoinWithMarketDataT;
  idx: number;
  currency: string;
};

const CoinRow = ({ coin, currency }: CoinRowT) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  return (
    <tr key={coin.id} className={s.row}>
      <td className={s.row_index}>{coin.market_cap_rank}</td>
      <td className={s.row_coinsName}>
        <Link to={`/crypto-app/coin/${coin.id}`}>
          <img
            loading="lazy"
            src={coin.image || imagePlaceholder}
            onLoad={() => setIsImgLoaded(true)}
            style={{
              filter: isImgLoaded ? "none" : "blur(3px)",
              transition: "0.3s",
            }}
          />
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
