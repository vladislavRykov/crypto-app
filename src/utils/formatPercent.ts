export const formatPercent = (value: number) => {
  const fixed = value.toFixed(1);
  return `${value >= 0 ? "+" : ""}${fixed}`;
};
