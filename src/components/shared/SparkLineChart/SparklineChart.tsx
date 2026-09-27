import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

export const SparklineChart = ({
  prices,
  strokeColor = "#4ade80",
}: {
  prices: number[];
  strokeColor?: string;
}) => {
  const data = prices.map((p) => ({ value: p }));

  return (
    <ResponsiveContainer width={100} height={30}>
      <LineChart data={data}>
        <YAxis hide domain={["auto", "auto"]} />
        <Line
          type="monotone"
          dataKey="value"
          stroke={strokeColor}
          dot={false}
          activeDot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
