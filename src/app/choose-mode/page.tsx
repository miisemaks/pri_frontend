'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/app-context';
import { UserRole } from '@/lib/types';

const modeLabels: Record<UserRole, string> = {
  buyer: 'Покупатель',
  seller: 'Продавец',
  director: 'Директор',
};

export default function ChooseModePage() {
  const { auth, user, setActiveRole } = useAppContext();
  const router = useRouter();

  if (!auth.isAuthorized) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-10">
        <section className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h1 className="text-2xl font-bold">Режимы недоступны</h1>
          <p className="mt-2 text-sm text-slate-400">Авторизуйтесь, чтобы выбрать режим входа.</p>
          <button
            type="button"
            onClick={() => router.push('/auth')}
            className="mt-5 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Перейти к авторизации
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-bold">Выбор режима входа</h1>
        <p className="mt-2 text-sm text-slate-400">
          После принятия приглашений в профиль вы можете входить как покупатель, продавец или директор.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {user.availableRoles.map((role) => (
            <button
              type="button"
              key={role}
              onClick={() => {
                setActiveRole(role);
                router.push(role === 'buyer' ? '/' : '/seller');
              }}
              className={`rounded-xl border px-4 py-4 text-left transition ${
                user.activeRole === role
                  ? 'border-indigo-400 bg-indigo-500/10'
                  : 'border-slate-700 bg-slate-950 hover:border-slate-500'
              }`}
            >
              <p className="font-semibold">{modeLabels[role]}</p>
              <p className="mt-1 text-xs text-slate-400">Нажмите для входа в этот режим</p>
            </button>
          ))}
        </div>

        <Link href="/" className="mt-6 inline-block text-sm text-indigo-300 underline underline-offset-4">
          Вернуться на главную
        </Link>
      </section>
    </main>
  );
}
