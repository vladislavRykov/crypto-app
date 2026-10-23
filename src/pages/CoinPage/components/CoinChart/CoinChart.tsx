import type { CurrencyT } from "@/api/types";
import { formatPrice } from "@/utils/formatPrice";
import { getChartTime } from "@/utils/formatTime";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetCoinChartById } from "../../../../features/coin/queries/coins";
import SolfLoader from "@/components/shared/SolfLoading/SolfLoading";

type CoinChartT = {
  vs_currency: CurrencyT;
  id: string | undefined;
};

const CoinChart = ({ vs_currency, id }: CoinChartT) => {
  const { data, isLoading, isError } = useGetCoinChartById(
    {
      days: "200",
      vs_currency,
    },
    id || "",
  );
  const chartData = data?.prices.map(([timestamp, price]) => ({
    timestamp,
    price,
  }));
  if (isLoading)
    return (
      <div style={{ width: "100%" }}>
        <SolfLoader text="Загрузка..." weight={500} />
      </div>
    );
  if (isError || !data) return <div>Данных нет</div>;
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
        <XAxis dataKey="timestamp" tickFormatter={(t) => getChartTime(t)} />
        <YAxis
          width={"auto"}
          dataKey="price"
          domain={["auto", "auto"]}
          tickFormatter={(p) => formatPrice(p, vs_currency)}
        />
        <Tooltip
          labelFormatter={(t) => {
            if (typeof t !== "number") return "";
            return getChartTime(t);
          }}
          formatter={(p) => {
            if (typeof p !== "number") return "";
            return formatPrice(p, vs_currency);
          }}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CoinChart;
