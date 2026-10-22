import { useParams } from "react-router-dom";
import { useCurrency } from "@/features/currency/context/CurrencyContext";
import CoinChart from "./components/CoinChart/CoinChart";
import CoinInfo from "./components/CoinInfo/CoinInfo";
import s from "./CoinPage.module.scss";
import { useGetCoinById } from "../../features/coin/queries/coins";

const CoinPage = () => {
  const { id } = useParams();
  const { currency } = useCurrency();
  const { data: coinData, isError } = useGetCoinById(
    { vs_currency: currency },
    id || "",
  );
  if (!id) {
    return <div>Нет id монеты в url</div>;
  }
  if (isError || !coinData) {
    return <div>Не удалось загрузить данные о монете</div>;
  }
  return (
    <div className={s.coinPage}>
      <div className={s.coinPage_wrapper}>
        <CoinInfo coinData={coinData} vs_currency={currency} />
        <CoinChart id={id} vs_currency={currency} />
      </div>
      <p className={s.coinPage_desc}>{coinData.description.en}</p>
      <p className={s.coinPage_desc}>{coinData.description.en}</p>
    </div>
  );
};

export default CoinPage;
