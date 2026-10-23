import { useRef } from "react";
import s from "./TableC.module.scss";
import { useCurrency } from "../../../../features/currency/context/CurrencyContext";
import { useSearchParams } from "react-router-dom";
import { useScrollPagination } from "../../../../hooks/useScrollPagination";
import CoinRow from "./CoinRow/CoinRow";
import SolfLoader from "../../../../components/shared/SolfLoading/SolfLoading";
import { useTableSort } from "@/hooks/useTableSort";
import { useInfiniteCoinsListMarket } from "../../../../features/dashboard/queries/market";
import TableHeader from "./TableHeader/TableHeader";
import type { CoinWithMarketDataT } from "@/api/types";

const TableC = () => {
  const { currency } = useCurrency();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteCoinsListMarket({
    vs_currency: currency,
    per_page: 50,
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
  if (isLoading) return <SolfLoader text="Загрузка..." weight={500} />;
  if (isError || !data) return <div>Данных нет</div>;
  return (
    <div className={s.coinsTable}>
      <div ref={scrollEl} className={s.table}>
        <table className={s.table_wrapper}>
          <TableHeader
            handleSort={handleSort}
            selectedSortDirection={sortDirection}
            selectedSortKey={sortKey}
          />
          <tbody className={s.table_body}>
            {sortedData.map((coin) => (
              <CoinRow key={coin.id} coin={coin} currency={currency} />
            ))}
          </tbody>
        </table>
        {hasNextPage && <SolfLoader text="Загрузка" weight={500} />}
      </div>
    </div>
  );
};

export default TableC;
