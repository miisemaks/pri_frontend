import z from "zod";

export const registerSchema = z.object({
  first_name: z
    .string("Поле обязательна к заполнению")
    .max(100, "Имя не может содержать более 100 символов"),
  last_name: z
    .string("Поле обязательна к заполнению")
    .max(100, "Фамилия не может содержать более 100 символов"),
  email: z.email("Некорректный email"),
  password: z
    .string("Поле обязательна к заполнению")
    .min(6, "Пароль должен быть не менее 6 символов"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
