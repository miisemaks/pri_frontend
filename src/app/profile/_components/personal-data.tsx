"use client";

import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { ProfileFormData, profileSchema } from "@/lib/schemas/profile.schema";
import { useUserStore } from "@/store/user-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { KeyLockIcon } from "@/components/icons/key-lock";
import { PasswordInput, PasswordInputRef } from "@/components/password-input";
import { KeyIcon } from "@/components/icons/key";
import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/switch";
import { BellIcon } from "@/components/icons/bell";

export const PersonalData = () => {
  const { first_name, last_name, email, password } = useUserStore();
  const { control, handleSubmit } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      first_name: first_name ?? "",
      last_name: last_name ?? "",
      email: email ?? "",
      password: password ?? "",
    },
  });
  const router = useRouter();
  const newPassRef = useRef<PasswordInputRef>(null);
  const repeatPassRef = useRef<PasswordInputRef>(null);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleEdit = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      <div className="flex flex-col bg-white border border-border rounded-[18px] gap-3.5 p-4 md:p-8">
        <div className="flex flex-col">
          <p className="font-bold text-[18px]">Личные данные</p>
          <p className="text-[12px] text-text-secondary">
            Эти данные видны вам и используются для связи
          </p>
        </div>
        <div className="h-px bg-border w-full" />
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[12px]">Имя</p>
            <Controller
              control={control}
              name="first_name"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  value={value}
                  placeholder="Иван"
                  onChange={onChange}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[12px]">Фамилия</p>
            <Controller
              control={control}
              name="last_name"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  value={value}
                  placeholder="Иванов"
                  onChange={onChange}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[12px]">Email</p>
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
                  type="email"
                  placeholder="ivan@mail.ru"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[12px]">Телефон</p>
            <Controller
              control={control}
              name="phone"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  type="tel"
                  placeholder="+7 (000) 000-00-00"
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[12px]">Город</p>
            <Select data={[]} label="Город" value={null} onChange={() => {}} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white flex flex-col p-4 md:p-8 rounded-[18px] border border-border gap-4">
          <div className="flex flex-row items-center gap-3">
            <div className="bg-brand-400 h-9.5 w-9.5 flex flex-col items-center justify-center rounded-[10px]">
              <KeyLockIcon size={16} className="text-brand" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[16px]">Смена пароля</p>
              <label className="text-[12px] text-text-secondary">
                Не менее 8 символов
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-semibold">Текущий пароль</p>
            <Controller
              control={control}
              name="password"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <PasswordInput
                  value={value}
                  leftElement={
                    <KeyLockIcon size={16} className="text-text-secondary" />
                  }
                  onChange={onChange}
                  error={error?.message}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      newPassRef.current?.focus();
                    }
                  }}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-semibold">Новый пароль</p>
            <Controller
              control={control}
              name="new_password"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <PasswordInput
                  value={value}
                  leftElement={
                    <KeyIcon size={16} className="text-text-secondary" />
                  }
                  onChange={onChange}
                  error={error?.message}
                  ref={newPassRef}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      repeatPassRef.current?.focus();
                    }
                  }}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[12px] font-semibold">Повторите новый пароль</p>
            <Controller
              control={control}
              name="repeat_password"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <PasswordInput
                  value={value}
                  leftElement={
                    <KeyIcon size={16} className="text-text-secondary" />
                  }
                  onChange={onChange}
                  error={error?.message}
                  ref={repeatPassRef}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col h-fit bg-white rounded-[18px] p-4 md:p-8 border border-border gap-4.5">
          <div className="flex flex-row items-center gap-3">
            <div className="bg-brand-400 flex flex-col items-center justify-center h-9.5 w-9.5 rounded-[10px]">
              <BellIcon size={16} className="text-brand" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[16px]">Настройки уведомлений</p>
              <label className="text-text-secondary text-[12px]">
                Выберите, какие новости получать
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <p className="font-semibold">Приглашение в друзья</p>
              <p className="text-[12px] text-text-secondary">
                Новые запросы и изменения статуса
              </p>
            </div>
            <Controller
              control={control}
              name="friend_permission"
              render={({ field: { value, onChange } }) => (
                <Switch value={value ?? false} onChange={onChange} />
              )}
            />
          </div>
          <div className="h-px w-full bg-border" />
          <div className="flex flex-row items-center justify-between">
            <div>
              <p className="font-semibold">Приглашения в магазины</p>
              <p className="text-[12px] text-text-secondary">
                Предложения присоединиться как продавец
              </p>
            </div>
            <Controller
              control={control}
              name="shop_invite_permission"
              render={({ field: { value, onChange } }) => (
                <Switch value={value ?? false} onChange={onChange} />
              )}
            />
          </div>
          <div className="h-px w-full bg-border" />
          <div className="flex flex-row items-center justify-between">
            <div>
              <p className="font-semibold">Новости магазинов</p>
              <p className="text-[12px] text-text-secondary">
                Акции и обновления из избранного
              </p>
            </div>
            <Controller
              control={control}
              name="shop_news_permission"
              render={({ field: { value, onChange } }) => (
                <Switch value={value ?? false} onChange={onChange} />
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center justify-between">
        <p className="text-text-secondary text-[12px] hidden md:flex">
          Последнее изменение: 24 сентября, 18:42
        </p>
        <div className="flex flex-row gap-2 md:gap-3 w-full md:w-fit">
          <button
            onClick={handleBack}
            className="border border-border bg-white h-10.5 px-4 rounded-[12px] font-semibold w-full md:w-fit"
          >
            Отмена
          </button>
          <button
            onClick={handleSubmit(handleEdit)}
            className="bg-brand border border-brand px-4 h-10.5 rounded-[12px] text-white font-semibold w-full md:w-fit"
          >
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
};
