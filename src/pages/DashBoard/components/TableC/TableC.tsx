import { useRef } from "react";
import s from "./TableC.module.scss";
import { useInfiniteCoinsListMarket } from "../../../../hooks/CoinGecko";
import { formatPrice } from "../../../../utils/formatPrice";
import { SparklineChart } from "../../../../components/shared/SparkLineChart/SparklineChart";
import ChangeIndicator from "../../../../components/shared/ChangeIndicator/ChangeIndicator";
import { useCurrency } from "../../../../context/CurrencyContext";
import { Link } from "react-router-dom";
import { useScrollPagination } from "../../../../hooks/useScrollPagination";
import CoinRow from "./CoinRow";

const TableC = () => {
  const { currency } = useCurrency();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteCoinsListMarket({
      vs_currency: currency,
      per_page: 50,
      initialPage: 1,
      locale: "ru",
      sparkline: true,
    });
  const scrollEl = useRef<HTMLDivElement>(null);
  useScrollPagination({
    loadMore: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    ref: scrollEl,
    deps: [data],
  });
  if (!data && !isLoading) return <div>Данных нет</div>;
  if (!data && isLoading) return <div>Загрузка</div>;
  console.log(data);
  return (
    <div className={s.coinsTable}>
      <div ref={scrollEl} className={s.table}>
        <table className={s.table_wrapper}>
          <thead className={s.table_head}>
            <tr>
              <th>№</th>
              <th>Валюта</th>
              <th>Цена</th>
              <th>24 часа</th>
              <th>Market Cap</th>
              <th>Последние 7 дней</th>
            </tr>
          </thead>
          <tbody className={s.table_body}>
            {data?.pages.flat().map((coin, idx) => (
              <CoinRow coin={coin} idx={idx} currency={currency} />
            ))}
          </tbody>
        </table>
        {hasNextPage && <div>Загрузка</div>}
      </div>
    </div>
  );
};

export default TableC;
