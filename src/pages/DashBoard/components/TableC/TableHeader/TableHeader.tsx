import s from "./TableHeader.module.scss";
import SortColLabel from "./SortColLabel";
import type { CoinWithMarketDataT } from "@/api/types";

type TableHeaderT = {
  selectedSortDirection: "asc" | "desc";
  selectedSortKey: keyof CoinWithMarketDataT;
  handleSort: (key: keyof CoinWithMarketDataT) => void;
};

const TableHeader = ({
  handleSort,
  selectedSortKey,
  selectedSortDirection,
}: TableHeaderT) => {
  const headerLabels: {
    label: string;
    field_name?: keyof CoinWithMarketDataT;
  }[] = [
    {
      label: "№",
    },
    {
      label: "Валюта",
      field_name: "name",
    },
    {
      label: "Цена",
      field_name: "current_price",
    },
    {
      label: "24 часа",
      field_name: "price_change_percentage_24h",
    },
    {
      label: "Market Cap",
      field_name: "market_cap",
    },
    {
      label: "Последние 7 дней",
    },
  ];

  return (
    <thead className={s.thead}>
      <tr>
        {headerLabels.map(({ label, field_name }) =>
          field_name ? (
            <th>
              <SortColLabel
                selectedSortKey={selectedSortKey}
                selectedSortDirection={selectedSortDirection}
                onClick={() => handleSort(field_name)}
                label={label}
              />
            </th>
          ) : (
            <th>{label}</th>
          ),
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;
