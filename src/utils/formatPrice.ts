export const formatPrice = (price: number, currency: string = "usd") => {
  const locale = navigator.language || "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    notation: "compact",
    compactDisplay: "short",
  }).format(price);
};
