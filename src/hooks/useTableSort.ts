import { useMemo, useState } from "react";

type SortDirection = "asc" | "desc";

type UseTableSortOptions<T> = {
  data: T[];
  initialSortKey: keyof T;
  initialDirection?: SortDirection;
};

export const useTableSort = <T>({
  data,
  initialSortKey,
  initialDirection = "asc",
}: UseTableSortOptions<T>) => {
  const [sortKey, setSortKey] = useState<keyof T>(initialSortKey);

  const [sortDirection, setSortDirection] =
    useState<SortDirection>(initialDirection);

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      let result = 0;

      if (typeof aValue === "string" && typeof bValue === "string") {
        result = aValue.localeCompare(bValue, "ru", {
          sensitivity: "base",
        });
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        result = aValue - bValue;
      }

      return sortDirection === "asc" ? result : -result;
    });
  }, [data, sortKey, sortDirection]);

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  return {
    sortedData,
    sortKey,
    sortDirection,
    handleSort,
  };
};
