"use client";

import Link from "next/link";

export default function ChooseModePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-bold">Выбор режима входа</h1>
        <p className="mt-2 text-sm text-slate-400">
          После принятия приглашений в профиль вы можете входить как покупатель,
          продавец или директор.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-3"></div>

        <Link
          href="/"
          className="mt-6 inline-block text-sm text-indigo-300 underline underline-offset-4"
        >
          Вернуться на главную
        </Link>
      </section>
    </main>
  );
}
