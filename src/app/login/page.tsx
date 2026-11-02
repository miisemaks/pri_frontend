"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/lib/schemas/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input";
import { PasswordInput } from "@/components/password-input";
import { useCallback } from "react";
import { useUserStore } from "@/store/user-store";

export default function AuthPage() {
  const router = useRouter();
  const { control, handleSubmit, getValues } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { login } = useUserStore();

  const handleNavigate = () => {
    try {
      login({ email: getValues("email"), password: getValues("password") });
      router.push("/");
    } catch (e) {
      if (e instanceof Error) {
        alert(e?.message);
      }
    }
  };

  const handleRegister = useCallback(() => {
    router.push("/register");
  }, [router]);

  return (
    <main className="flex flex-col flex-1 items-center justify-center w-full">
      <section className="flex flex-col items-center w-full max-w-360">
        <div className="flex flex-col shadow-2xl bg-white rounded-[18px] p-4 md:p-9 w-fit gap-4 md:gap-6.5 mx-4 md:mx-0">
          <div className="flex flex-col gap-2">
            <h1 className="mt-3 text-[20px] md:text-2xl font-bold">
              С возвращением
            </h1>
            <label className="text-text-secondary text-[12px] md:text-[14px]">
              Войдите, чтобы сохранять магазины и быстро находить нужные товары.
            </label>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <form className="flex flex-col gap-2">
              <Controller
                control={control}
                name="email"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <div className="flex flex-col gap-2">
                    <label className="font-bold">Email</label>
                    <Input
                      value={value}
                      onChange={onChange}
                      placeholder="name@example.ru"
                      className={"w-full h-12 px-3 rounded-[12px]"}
                      error={error?.message}
                      type="email"
                    />
                  </div>
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <div className="flex flex-col gap-2">
                    <label className="font-bold">Пароль</label>
                    <PasswordInput
                      value={value}
                      onChange={onChange}
                      placeholder="*******"
                      className={"w-full h-12 px-3 rounded-[12px]"}
                      error={error?.message}
                    />
                  </div>
                )}
              />
            </form>
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="bg-brand w-full h-12 rounded-[12px] text-white font-semibold"
              onClick={handleSubmit(handleNavigate)}
            >
              Войти
            </button>

            <label className="text-text-secondary flex gap-2 text-[12px] md:text-[14px]">
              Ещё нет аккаунта?
              <button
                className="font-semibold text-brand"
                onClick={handleRegister}
              >
                Зарегистрироваться
              </button>
            </label>
          </div>
        </div>
      </section>
    </main>
  );
}
