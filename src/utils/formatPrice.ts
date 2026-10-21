export const formatPrice = (
  price: number,
  currency: string = "usd",
  params: { notation: "standard" | "compact" } = { notation: "compact" },
) => {
  const locale = navigator.language || "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    compactDisplay: "short",
    ...params,
  }).format(price);
};
