'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/app-context';

export default function ProfilePage() {
  const { auth, user, respondFriendInvite, respondStaffInvite } = useAppContext();
  const router = useRouter();

  if (!auth.isAuthorized) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-10">
        <section className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h1 className="text-2xl font-bold">Профиль недоступен</h1>
          <p className="mt-2 text-sm text-slate-400">Сначала авторизуйтесь, чтобы управлять приглашениями.</p>
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
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <header className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-bold">Профиль</h1>
        <p className="mt-2 text-sm text-slate-300">{user.fullName}</p>
        <p className="text-sm text-slate-400">{user.email}</p>
        <p className="mt-2 text-sm text-slate-400">Доступные режимы: {user.availableRoles.join(', ')}</p>
        <Link href="/choose-mode" className="mt-4 inline-block text-sm text-indigo-300 underline underline-offset-4">
          Выбрать режим при входе
        </Link>
      </header>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Приглашения в друзья</h2>
          <div className="mt-4 space-y-3">
            {user.friendInvites.map((invite) => (
              <div key={invite.id} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="font-medium">{invite.from}</p>
                <p className="mt-1 text-sm text-slate-300">{invite.message}</p>
                <p className="mt-1 text-xs text-slate-500">Статус: {invite.status}</p>
                {invite.status === 'pending' ? (
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => respondFriendInvite(invite.id, 'accept')}
                      className="rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-400"
                    >
                      Принять
                    </button>
                    <button
                      type="button"
                      onClick={() => respondFriendInvite(invite.id, 'reject')}
                      className="rounded-lg border border-slate-700 px-3 py-2 text-xs hover:border-slate-500"
                    >
                      Отклонить
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Приглашения в сотрудники магазина</h2>
          <div className="mt-4 space-y-3">
            {user.staffInvites.map((invite) => (
              <div key={invite.id} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="font-medium">{invite.storeName}</p>
                <p className="mt-1 text-sm text-slate-300">Роль: {invite.role}</p>
                <p className="text-sm text-slate-400">Отправил: {invite.from}</p>
                <p className="mt-1 text-xs text-slate-500">Статус: {invite.status}</p>
                {invite.status === 'pending' ? (
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => respondStaffInvite(invite.id, 'accept')}
                      className="rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-400"
                    >
                      Принять
                    </button>
                    <button
                      type="button"
                      onClick={() => respondStaffInvite(invite.id, 'reject')}
                      className="rounded-lg border border-slate-700 px-3 py-2 text-xs hover:border-slate-500"
                    >
                      Отклонить
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
