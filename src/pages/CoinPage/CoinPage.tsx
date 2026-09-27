import React from "react";
import { useParams } from "react-router-dom";
import { useGetCoinChartById } from "../../hooks/CoinGecko";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getChartTime } from "../../utils/formatTime";
import { formatPrice } from "../../utils/formatPrice";

const CoinPage = () => {
  const { id } = useParams();
  const vs_currency = "rub";
  const { data, isLoading, error } = useGetCoinChartById(
    {
      days: "7",
      vs_currency,
    },
    id || "",
  );
  const chartData = data?.prices.map(([timestamp, price]) => ({
    timestamp,
    price,
  }));
  console.log(2252, chartData);
  // console.log(222, data);
  return (
    <div>
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
    </div>
  );
};

export default CoinPage;
