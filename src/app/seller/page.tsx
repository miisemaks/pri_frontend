'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/app-context';

const formatPrice = (value: number) =>
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(value);

export default function SellerPage() {
  const {
    auth,
    user,
    stores,
    selectedStore,
    selectedStoreId,
    shareMessage,
    productForm,
    storeSettingsForm,
    editingProductId,
    selectStore,
    setProductForm,
    setStoreSettingsForm,
    hydrateProductForm,
    hydrateStoreSettingsForm,
    submitProduct,
    submitStoreSettings,
    shareEntity,
  } = useAppContext();
  const router = useRouter();

  if (!auth.isAuthorized) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-4 py-6 sm:px-6 sm:py-10">
        <section className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
          <h1 className="text-xl font-bold sm:text-2xl">Режим продавца недоступен</h1>
          <p className="mt-2 text-sm text-slate-400">Сначала авторизуйтесь и выберите режим входа.</p>
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

  if (user.activeRole === 'buyer') {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-4 py-6 sm:px-6 sm:py-10">
        <section className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
          <h1 className="text-xl font-bold sm:text-2xl">Вы в режиме покупателя</h1>
          <p className="mt-2 text-sm text-slate-400">
            Для управления магазином выберите режим продавца или директора.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-2 sm:flex">
            <Link
              href="/choose-mode"
              className="rounded-xl bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Выбрать режим
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-slate-700 px-4 py-3 text-center text-sm hover:border-slate-500"
            >
              На главную
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const qrCodeUrl = `https://quickchart.io/qr?size=200&text=${encodeURIComponent(
    `https://pri.market/stores/${selectedStore.id}`,
  )}`;

  const activeStoreRevenue = selectedStore.salesStats.reduce((sum, item) => sum + item.revenue, 0);
  const activeStoreOrders = selectedStore.salesStats.reduce((sum, item) => sum + item.orders, 0);

  const isDirector = user.activeRole === 'director';

  const handleProductSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitProduct();
  };

  const handleStoreSettingsSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitStoreSettings();
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
      <header className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Режим магазина</p>
            <h1 className="mt-2 text-xl font-bold sm:text-2xl">Кабинет {isDirector ? 'директора' : 'продавца'}</h1>
            <p className="mt-2 text-sm text-slate-300">
              {isDirector
                ? 'Вы можете изменять основную информацию магазина и управлять контентом.'
                : 'Вы можете управлять товарами и смотреть операционные метрики.'}
            </p>
          </div>

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
            <Link href="/" className="rounded-xl border border-slate-700 px-4 py-2 text-center text-sm hover:border-slate-500">
              Главная
            </Link>
          </div>
        </div>
      </header>

      {shareMessage ? (
        <div className="mt-4 rounded-xl border border-indigo-400/30 bg-indigo-500/10 p-3 text-sm text-indigo-200 sm:mt-6">
          {shareMessage}
        </div>
      ) : null}

      <section className="mt-4 grid gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-4 sm:space-y-6">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5">
            <label htmlFor="store-select" className="text-sm text-slate-300">
              Активный магазин
            </label>
            <select
              id="store-select"
              value={selectedStoreId}
              onChange={(event) => selectStore(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
            >
              {stores.map((store) => (
                <option key={store.id} value={store.id}>
                  {store.name}
                </option>
              ))}
            </select>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5">
            <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <h2 className="text-lg font-semibold">Настройки магазина</h2>
              <button
                type="button"
                onClick={hydrateStoreSettingsForm}
                className="rounded-lg border border-slate-700 px-3 py-2 text-xs hover:border-slate-500"
              >
                Загрузить текущие
              </button>
            </div>

            <form className="grid gap-3" onSubmit={handleStoreSettingsSubmit}>
              <input
                value={storeSettingsForm.name}
                onChange={(event) =>
                  setStoreSettingsForm({
                    ...storeSettingsForm,
                    name: event.target.value,
                  })
                }
                disabled={!isDirector}
                placeholder="Название магазина"
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none disabled:opacity-60"
              />
              <textarea
                value={storeSettingsForm.shortDescription}
                onChange={(event) =>
                  setStoreSettingsForm({
                    ...storeSettingsForm,
                    shortDescription: event.target.value,
                  })
                }
                disabled={!isDirector}
                placeholder="Краткое описание"
                className="min-h-24 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none disabled:opacity-60"
              />
              <input
                value={storeSettingsForm.location}
                onChange={(event) =>
                  setStoreSettingsForm({
                    ...storeSettingsForm,
                    location: event.target.value,
                  })
                }
                disabled={!isDirector}
                placeholder="Расположение магазина"
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none disabled:opacity-60"
              />
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={storeSettingsForm.primaryColor}
                  onChange={(event) =>
                    setStoreSettingsForm({
                      ...storeSettingsForm,
                      primaryColor: event.target.value,
                    })
                  }
                  disabled={!isDirector}
                  className="h-11 w-14 rounded-lg border border-slate-700 bg-slate-950 disabled:opacity-60"
                />
                <p className="text-sm text-slate-300">Основной цвет (меняет директор)</p>
              </div>

              <button
                type="submit"
                disabled={!isDirector}
                className="rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Сохранить настройки
              </button>
            </form>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5">
            <h2 className="text-lg font-semibold">Товары: добавление и редактирование</h2>
            <form className="mt-4 grid gap-3" onSubmit={handleProductSubmit}>
              <input
                value={productForm.name}
                onChange={(event) =>
                  setProductForm({
                    ...productForm,
                    name: event.target.value,
                  })
                }
                placeholder="Название товара"
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
              />

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <input
                  value={productForm.category}
                  onChange={(event) =>
                    setProductForm({
                      ...productForm,
                      category: event.target.value,
                    })
                  }
                  placeholder="Категория"
                  className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
                />
                <input
                  value={productForm.price}
                  onChange={(event) =>
                    setProductForm({
                      ...productForm,
                      price: event.target.value,
                    })
                  }
                  placeholder="Цена"
                  className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
                />
                <input
                  value={productForm.discountPercent}
                  onChange={(event) =>
                    setProductForm({
                      ...productForm,
                      discountPercent: event.target.value,
                    })
                  }
                  placeholder="Скидка %"
                  className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
                />
                <input
                  value={productForm.stock}
                  onChange={(event) =>
                    setProductForm({
                      ...productForm,
                      stock: event.target.value,
                    })
                  }
                  placeholder="Остаток"
                  className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
                />
              </div>

              <textarea
                value={productForm.description}
                onChange={(event) =>
                  setProductForm({
                    ...productForm,
                    description: event.target.value,
                  })
                }
                placeholder="Описание"
                className="min-h-24 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none"
              />

              <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
                >
                  {editingProductId ? 'Сохранить изменения' : 'Добавить товар'}
                </button>
                <button
                  type="button"
                  onClick={() => hydrateProductForm()}
                  className="rounded-xl border border-slate-700 px-4 py-3 text-sm hover:border-slate-500"
                >
                  Очистить форму
                </button>
              </div>
            </form>

            <div className="mt-5 space-y-3">
              {selectedStore.products.map((product) => (
                <div key={product.id} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex flex-col items-start justify-between gap-3 sm:flex-row">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-xs text-slate-400">{product.category}</p>
                      <p className="mt-1 text-sm text-slate-300">
                        {formatPrice(product.price)} · скидка {product.discountPercent}%
                      </p>
                      <p className="text-xs text-slate-500">Остаток: {product.stock}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => hydrateProductForm(product)}
                      className="rounded-lg border border-slate-700 px-3 py-2 text-xs hover:border-slate-500"
                    >
                      Редактировать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="space-y-4 sm:space-y-6">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5">
            <h3 className="text-lg font-semibold">QR-code магазина</h3>
            <p className="mt-1 text-sm text-slate-400">Быстрый доступ к публичной карточке магазина</p>
            <div className="mt-4 flex justify-center rounded-xl border border-slate-800 bg-white p-4">
              <Image src={qrCodeUrl} alt="QR-code магазина" width={200} height={200} unoptimized />
            </div>
            <button
              type="button"
              onClick={() => shareEntity(selectedStore.name, `/stores/${selectedStore.id}`)}
              className="mt-4 w-full rounded-xl border border-slate-700 px-4 py-3 text-sm hover:border-slate-500"
            >
              Поделиться магазином
            </button>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5">
            <h3 className="text-lg font-semibold">Клиенты, бонусы, сертификаты</h3>
            <div className="mt-4 space-y-3">
              {selectedStore.clients.map((client) => (
                <div key={client.id} className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm">
                  <p className="font-medium">{client.name}</p>
                  <p className="text-slate-400">Визитов: {client.visits}</p>
                  <p className="text-slate-400">Бонусы: {client.bonusPoints}</p>
                  <p className="text-slate-400">Сертификаты: {client.certificates}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-sm font-medium">Бонусные программы</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                {selectedStore.bonuses.map((bonus) => (
                  <li key={bonus}>• {bonus}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-sm font-medium">Сертификаты</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                {selectedStore.certificates.map((certificate) => (
                  <li key={certificate}>• {certificate}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5">
            <h3 className="text-lg font-semibold">Статистика продаж</h3>
            <p className="mt-1 text-sm text-slate-400">
              Выручка: {formatPrice(activeStoreRevenue)} · Заказы: {activeStoreOrders}
            </p>
            <div className="mt-4 space-y-3">
              {selectedStore.salesStats.map((stat) => (
                <div key={stat.day}>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{stat.day}</span>
                    <span>{formatPrice(stat.revenue)}</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-indigo-500"
                      style={{ width: `${Math.max(10, (stat.revenue / 130000) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
}
