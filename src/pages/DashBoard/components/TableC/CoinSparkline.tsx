import { SparklineChart } from "../../../../components/shared/SparkLineChart/SparklineChart";

type CoinSparklineT = {
  price_change_percentage_24h: number | undefined;
  sparkline_in_7d:
    | {
        price: number[];
      }
    | undefined;
};

const CoinSparkline = ({
  price_change_percentage_24h,
  sparkline_in_7d,
}: CoinSparklineT) => {
  return (
    <SparklineChart
      strokeColor={
        price_change_percentage_24h && price_change_percentage_24h >= 0
          ? "green"
          : "red"
      }
      prices={sparkline_in_7d?.price || []}
    />
  );
};

export default CoinSparkline;
