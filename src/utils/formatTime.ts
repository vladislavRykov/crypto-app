export const getChartTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const isIntraday = Date.now() - timestamp <= 24 * 60 * 60 * 1000;
  if (isIntraday) {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return date.toLocaleDateString();
};
