import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import s from "./TableHeader.module.scss";
import type { CoinWithMarketDataT } from "@/api/types";

type SortColLabelT = {
  label: string;
  selectedSortDirection: "asc" | "desc";
  selectedSortKey: keyof CoinWithMarketDataT;
  onClick?: () => void;
};

const SortColLabel = ({
  label,
  selectedSortDirection,
  selectedSortKey,
  onClick,
}: SortColLabelT) => {
  return (
    <button
      className={s.sortColLabel}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div className={s.sortColLabel_arrow}>
        {selectedSortDirection === "asc" ? (
          <IoMdArrowDropup />
        ) : (
          <IoMdArrowDropdown />
        )}
      </div>
      {label}
    </button>
  );
};

export default SortColLabel;
