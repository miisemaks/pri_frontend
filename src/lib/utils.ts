export { cn } from "cn";

export function formatCurrency(
  amount: number,
  locale: "ru-RU" = "ru-RU",
  currency: "RUB" = "RUB",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(
  value: number | string,
  locale: "ru-RU" = "ru-RU",
) {
  const num = Number(value);

  if (isNaN(num)) {
    return "0";
  }
  return new Intl.NumberFormat(locale).format(num);
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
