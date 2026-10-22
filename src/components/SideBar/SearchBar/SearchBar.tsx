import s from "./SearchBar.module.scss";
import { Link } from "react-router-dom";
import { useSelect } from "../../../hooks/useSelect";
import { useSearchDebounced } from "../../../hooks/useSearch";
import SolfLoader from "../../shared/SolfLoading/SolfLoading";
import {
  updateHistory,
  type HistoryCoinSearchT,
} from "@/features/coin/coin-search/history/searchCoinHistrory";
import SearchCoinHistory from "./SearchCoinHistory";
import { useSearchForCoin } from "@/features/coin/coin-search/queries/search";

const SearchBar = () => {
  const { value, debouncedValue, isUpdating, onInputChange, setValue } =
    useSearchDebounced(800);
  const { open, setIsOpen, onOptionClick, wrapperRef } = useSelect(
    (record: HistoryCoinSearchT | null) => {
      record && updateHistory(record);
      setValue("");
    },
  );

  const { data, isLoading } = useSearchForCoin(
    { query: debouncedValue },
    !!debouncedValue,
  );

  return (
    <div className={s.searchBar}>
      <div ref={wrapperRef} className={s.searchBar_wrapper}>
        <input
          placeholder="Поиск валюты"
          className={s.searchBar_input}
          value={value}
          onFocus={() => setIsOpen(true)}
          onChange={onInputChange}
        />

        {open && (
          <div className={s.searchSelect}>
            {!value && <SearchCoinHistory onOptionClick={onOptionClick} />}
            {(isLoading || isUpdating) && <SolfLoader text="Загрузка" />}
            {!data ||
              (data.coins.length === 0 && (
                <div className={s.searchSelect_notFound}>Не найдено</div>
              ))}
            {data?.coins.map((coin) => (
              <Link
                to={`coin/${coin.id}`}
                onClick={() => onOptionClick(coin)}
                className={s.searchSelect_option}
              >
                <img src={coin.thumb} loading="lazy" />
                <span>{coin.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
