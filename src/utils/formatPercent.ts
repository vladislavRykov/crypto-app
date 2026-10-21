export const formatPercent = (value: number, sign: boolean = false) => {
  const fixed = value.toFixed(1);
  if (sign) return `${value >= 0 ? "+" : ""}${fixed}`;
  const noSignPercent = value < 0 ? Number(fixed) * -1 : fixed;
  return `${noSignPercent}`;
};
