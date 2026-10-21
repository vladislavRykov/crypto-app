import { useRef } from "react";
import s from "./TableC.module.scss";
import { useInfiniteCoinsListMarket } from "../../../../hooks/CoinGecko";
import { useCurrency } from "../../../../context/CurrencyContext";
import { useParams, useSearchParams } from "react-router-dom";
import { useScrollPagination } from "../../../../hooks/useScrollPagination";
import CoinRow from "./CoinRow";
import SolfLoader from "../../../../components/shared/SolfLoading/SolfLoading";
import { useTableSort } from "@/hooks/useTableSort";
import SortColLabel from "./SortColLabel";

const TableC = () => {
  const { currency } = useCurrency();
  const [searchParams, _] = useSearchParams();
  const page = searchParams.get("page");
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteCoinsListMarket({
      vs_currency: currency,
      per_page: 50,
      // initialPage: 3,
      initialPage: Number(page) || 1,
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
  const { sortedData, sortDirection, sortKey, handleSort } = useTableSort({
    data: data?.pages.flat() || [],
    initialSortKey: "market_cap",
    initialDirection: "desc",
  });
  if (!data && !isLoading) return <div>Данных нет</div>;
  if (!data && isLoading) return <SolfLoader text="Загрузка" weight={500} />;
  console.log(sortedData);
  return (
    <div className={s.coinsTable}>
      <div ref={scrollEl} className={s.table}>
        <table className={s.table_wrapper}>
          <thead className={s.table_head}>
            <tr>
              <th>№</th>
              <th>
                <SortColLabel
                  selectedSortKey={sortKey}
                  selectedSortDirection={sortDirection}
                  onClick={() => handleSort("name")}
                  label="Валюта"
                />
              </th>
              <th>
                <SortColLabel
                  selectedSortKey={sortKey}
                  selectedSortDirection={sortDirection}
                  onClick={() => handleSort("current_price")}
                  label="Цена"
                />
              </th>
              <th>
                <SortColLabel
                  selectedSortKey={sortKey}
                  selectedSortDirection={sortDirection}
                  onClick={() => handleSort("price_change_percentage_24h")}
                  label="24 часа"
                />
              </th>
              <th>
                <SortColLabel
                  selectedSortKey={sortKey}
                  selectedSortDirection={sortDirection}
                  onClick={() => handleSort("market_cap")}
                  label="Market Cap"
                />
              </th>
              <th>Последние 7 дней</th>
            </tr>
          </thead>
          <tbody className={s.table_body}>
            {/* {data?.pages.flat().map((coin, idx) => ( */}
            {sortedData.map((coin, idx) => (
              <CoinRow coin={coin} idx={idx} currency={currency} />
            ))}
          </tbody>
        </table>
        {hasNextPage && <SolfLoader text="Загрузка" weight={500} />}
      </div>
    </div>
  );
};

export default TableC;
