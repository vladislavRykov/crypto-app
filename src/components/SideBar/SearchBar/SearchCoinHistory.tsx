import s from "./SearchBar.module.scss";
import { Link } from "react-router-dom";
import CrossBtn from "@/components/shared/Buttons/CrossBtn/CrossBtn";
import { useCoinSearchHistory } from "@/hooks/useCoinSearchHistory";

const SearchCoinHistory = ({
  onOptionClick,
}: {
  onOptionClick: (...args: any[]) => void;
}) => {
  const { history, clearHistoryF } = useCoinSearchHistory();
  if (!history) return <></>;
  return (
    <div className={s.searchCoinHistory}>
      <div className={s.searchCoinHistory_header}>
        <span className={s.searchCoinHistory_title}>История</span>
        <div className={s.searchCoinHistory_cross}>
          <CrossBtn onClick={clearHistoryF} />
        </div>
      </div>
      <div className={s.searchCoinHistory_coins}>
        {history.reverse().map((coin) => (
          <Link
            to={`coin/${coin.id}`}
            onClick={() => onOptionClick(null)}
            className={s.searchSelect_option}
          >
            <img src={coin.thumb} loading="lazy" />
            <span>{coin.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SearchCoinHistory;
