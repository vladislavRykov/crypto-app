import ChangeIndicator from "../../../../components/shared/ChangeIndicator/ChangeIndicator";
import { useGetGlobal } from "../../../../hooks/CoinGecko";
import { formatPrice } from "../../../../utils/formatPrice";
import s from "./MarketGlobal.module.scss";

const MarketGlobal = () => {
  const { data } = useGetGlobal();
  if (!data?.data) return <div>Данные не пришли</div>;
  const globalInfo = data.data;
  const date = new Date(globalInfo.updated_at * 1000).toLocaleString([], {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const change24HoursUsd = globalInfo.market_cap_change_percentage_24h_usd;
  return (
    <section className={s.marketGlobal}>
      <div className={s.marketGlobal_date}>{`Данные от: ${date}`}</div>
      <div className={s.marketGlobal_wrapper}>
        <span className={s.marketGlobal_info}>
          Цены на криптовалюты по рыночной капитализации
        </span>
        <br />
        {`Размер рынка криптовалют на текущий момент ${formatPrice(globalInfo.total_market_cap.usd)}`}
        , изменение на <ChangeIndicator percent={change24HoursUsd} /> за
        последние 24 часа
      </div>
    </section>
  );
};

export default MarketGlobal;
