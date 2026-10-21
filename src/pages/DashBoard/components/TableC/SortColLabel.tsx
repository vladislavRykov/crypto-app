import type { CoinWithMarketDataT } from "@/CoinGeckoTypes";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import s from "./TableC.module.scss";

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
