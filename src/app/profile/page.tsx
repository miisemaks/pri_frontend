"use client";

import { InfoWithDot } from "@/components/info-with-dot";
import { PersonalData } from "./_components/personal-data";
import { Subscreen } from "./_components/subscreen";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getName } from "@/lib/utils";
import { useUserStore } from "@/store/user-store";

export default function ProfilePage() {
  const { first_name, last_name, email } = useUserStore();
  return (
    <main className="flex flex-col flex-1 items-center w-full">
      <section className="flex flex-col max-w-360 w-full gap-4 px-4 md:px-6 py-4 md:py-8 md:gap-8 sm:gap-6 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-start md:justify-between gap-4.5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-[12px] text-brand">
              НАСТРОЙКИ АККАУНТА
            </p>
            <h2 className="text-[30px] md:text-[32px] font-bold">
              Редактирование профиля
            </h2>
            <label className="text-text-secondary">
              Обновите личные данные, пароль и способы получения уведомлений.
            </label>
          </div>
          <InfoWithDot text="Профиль заполнен" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="grid col-span-12 md:col-span-2 gap-4 h-fit">
            <div className="flex flex-row gap-3 border border-border p-4 rounded-[18px] bg-white h-fit">
              <Avatar size="lg">
                <AvatarImage
                  alt={getName(first_name, last_name, false, null)}
                />
                <AvatarFallback>
                  {getName(first_name, last_name, true, null)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-[16px]">
                  {getName(first_name, last_name, false, null)}
                </p>
                <p className="text-text-secondary text-[11px]">{email}</p>
              </div>
            </div>
            <Subscreen value={"edit"} />
          </div>
          <div className="grid col-span-12 md:col-span-10 gap-4">
            <PersonalData />
          </div>
        </div>
      </section>
    </main>
  );
}
