import z from "zod";

export const loginSchema = z.object({
  email: z.email("Некорректный email"),
  password: z
    .string()
    .min(1, "Пароль обязателен для заполнения")
    .min(6, "Пароль должен быть не менее 6 символов"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
