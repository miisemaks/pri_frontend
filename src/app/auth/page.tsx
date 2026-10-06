"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/lib/schemas/login.shema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AuthPage() {
  const router = useRouter();
  const { control, getValues } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!getValues("email") || !getValues("password")) {
      return;
    }

    router.push("/");
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-6 py-10">
      <section className="w-full rounded-2xl border border-white bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          PRI Marketplace
        </p>
        <h1 className="mt-3 text-2xl font-bold">Авторизация</h1>
        <p className="mt-2 text-sm text-slate-400">
          Войдите, чтобы открыть профиль и выбор режима.
        </p>

        <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <input
                type="email"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <input
                type="password"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Пароль"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
              />
            )}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white hover:bg-[#16846B33]"
          >
            Войти
          </button>
        </form>

        <Link
          href="/"
          className="mt-4 inline-block text-sm text-indigo-300 underline underline-offset-4"
        >
          Вернуться на главную
        </Link>
      </section>
    </main>
  );
}
