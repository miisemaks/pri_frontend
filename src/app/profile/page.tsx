"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <header className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <Link
          href="/choose-mode"
          className="mt-4 inline-block text-sm text-indigo-300 underline underline-offset-4"
        >
          Выбрать режим при входе
        </Link>
      </header>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">Profile</section>
    </main>
  );
}
