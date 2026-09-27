import s from "./SearchBar.module.scss";
import { useSearchForCoin } from "../../../hooks/CoinGecko";
import { useDebouncedValue } from "../../../hooks/simpleHooks";
import { Link } from "react-router-dom";
import { useSelect } from "../../../hooks/useSelect";
import { useSearchDebounced } from "../../../hooks/useSearch";

const SearchBar = () => {
  const { value, debouncedValue, isUpdating, onInputChange, setValue } =
    useSearchDebounced(800);
  const { open, setIsOpen, onOptionClick, wrapperRef } = useSelect(() =>
    setValue(""),
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
            {(isLoading || isUpdating) && (
              <div className={s.searchSelect_softLoading}>Загрузка</div>
            )}
            {!data ||
              (data.coins.length === 0 && (
                <div className={s.searchSelect_notFound}>Не найдено</div>
              ))}
            {data?.coins.map((coin) => (
              <Link
                to={`coin/${coin.id}`}
                onClick={onOptionClick}
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
