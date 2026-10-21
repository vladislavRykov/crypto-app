import type { CurrencyT } from "@/CoinGeckoTypes";
import { useGetCoinChartById } from "@/hooks/CoinGecko";
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

type CoinChartT = {
  vs_currency: CurrencyT;
  id: string | undefined;
};

const CoinChart = ({ vs_currency, id }: CoinChartT) => {
  const { data, isLoading, error } = useGetCoinChartById(
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
