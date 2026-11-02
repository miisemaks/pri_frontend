"use client";

import { Input } from "@/components/input";
import { PasswordInput } from "@/components/password-input";
import {
  RegisterFormData,
  registerSchema,
} from "@/lib/schemas/register.schema";
import { useUserStore } from "@/store/user-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";

const Register = () => {
  const { control, handleSubmit, getValues } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  const { register } = useUserStore();
  const router = useRouter();

  const handleRegister = useCallback(() => {
    register(getValues());
    router.push("/");
  }, [getValues, register, router]);

  const handleNavigateLogin = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <main className="flex flex-col flex-1 items-center justify-center w-full">
      <section className="flex flex-col items-center w-full max-w-360">
        <div className="flex flex-col shadow-2xl bg-white rounded-[18px] p-4 md:p-9 w-fit gap-4 md:gap-6.5 mx-4 md:mx-0">
          <div className="flex flex-col gap-2">
            <h1 className="mt-3 text-[20px] md:text-2xl font-bold">
              Создайте аккаунт
            </h1>
            <label className="text-text-secondary">
              Присоединяйтесь к «Рядом», чтобы всё нужное всегда было под рукой.
            </label>
          </div>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Controller
                control={control}
                name="first_name"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    placeholder="Имя"
                    error={error?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="last_name"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    value={value}
                    onChange={onChange}
                    placeholder="Фамилия"
                    error={error?.message}
                  />
                )}
              />
            </div>
            <Controller
              control={control}
              name="email"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  placeholder="temp@mail.ru"
                  error={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <PasswordInput
                  value={value}
                  onChange={onChange}
                  placeholder="Пароль"
                  error={error?.message}
                />
              )}
            />
          </form>
          <label className="text-[12px] text-text-secondary">
            Все поля обязательны. Нажимая «Создать аккаунт», вы принимаете
            условия сервиса.
          </label>
          <button
            className="bg-brand text-white h-12 md:h-14 rounded-[12px] font-semibold"
            onClick={handleSubmit(handleRegister)}
          >
            Создать аккаунт
          </button>
          <label className="text-text-secondary items-center text-center gap-1">
            Уже есть аккаунт?
            <button
              onClick={handleNavigateLogin}
              className="ml-1 text-text-brand font-semibold"
            >
              Войти
            </button>
          </label>
        </div>
      </section>
    </main>
  );
};

export default Register;
