"use client";

import Link from "next/link";

export default function SellerPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
      <header className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
          <div className="grid w-full grid-cols-1 gap-2 sm:w-auto sm:flex sm:flex-wrap">
            <Link
              href="/choose-mode"
              className="rounded-xl border border-slate-700 px-4 py-2 text-center text-sm hover:border-slate-500"
            >
              Сменить режим
            </Link>
            <Link
              href="/profile"
              className="rounded-xl border border-slate-700 px-4 py-2 text-center text-sm hover:border-slate-500"
            >
              Профиль
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-slate-700 px-4 py-2 text-center text-sm hover:border-slate-500"
            >
              Главная
            </Link>
          </div>
        </div>
      </header>
      <div>Seller</div>
    </main>
  );
}
