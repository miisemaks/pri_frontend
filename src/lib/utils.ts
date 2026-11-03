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

export const getName = (
  firstName: string | null,
  lastName: string | null,
  isShort: boolean = false,
  emptyState: string | null,
) => {
  if (firstName && lastName) {
    if (isShort) {
      return firstName?.[0] + lastName?.[0];
    } else {
      return `${firstName} ${lastName}`;
    }
  }

  if (firstName) {
    return firstName;
  }

  if (lastName) {
    return lastName;
  }

  return emptyState ?? "";
};

export const getNoun = (val: number, strings: string[]) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${val} ${
    strings[
      val % 100 > 4 && val % 100 < 20 ? 2 : cases[val % 10 < 5 ? val % 10 : 5]
    ]
  }`;
};

export const getInvitationDescription = (
  invite_accepted: boolean | null,
  shared_subscription: { id: number; title: string }[],
) => {
  if (invite_accepted) {
    return "Приглашение принято";
  }

  if (invite_accepted === false) {
    return "Приглашение отказано";
  }

  if (shared_subscription.length > 0) {
    return `Вы вместе подписаны на ${getNoun(shared_subscription.length, ["магазин", "магазина", "магазинов"])}`;
  }

  return "Хочет добавить вас в друзья";
};
