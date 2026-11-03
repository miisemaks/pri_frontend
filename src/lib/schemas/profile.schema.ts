import z from "zod";

const russianPhoneRegex =
  /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;

export const profileSchema = z.object({
  first_name: z
    .string("Поле обязательна к заполнению")
    .max(100, "Имя не может содержать более 100 символов"),
  last_name: z
    .string("Поле обязательна к заполнению")
    .max(100, "Фамилия не может содержать более 100 символов"),
  email: z.email("Некорректный email"),
  phone: z
    .string()
    .trim()
    .regex(russianPhoneRegex, { message: "Неверный формат номера телефона" })
    .transform((val) => {
      const clean = val.replace(/\D/g, "");
      if (clean.startsWith("8")) {
        return `+7${clean.slice(1)}`;
      }
      if (clean.startsWith("7") && clean.length === 11) {
        return `+${clean}`;
      }
      return `+7${clean}`; // если ввели сразу 10 цифр без 7/8
    }),
  password: z
    .string("Поле обязательна к заполнению")
    .min(6, "Пароль должен быть не менее 6 символов"),
  new_password: z
    .string("Поле обязательна к заполнению")
    .min(6, "Пароль должен быть не менее 6 символов"),
  repeat_password: z
    .string("Поле обязательна к заполнению")
    .min(6, "Пароль должен быть не менее 6 символов"),
  friend_permission: z.boolean().optional(),
  shop_invite_permission: z.boolean().optional(),
  shop_news_permission: z.boolean().optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
