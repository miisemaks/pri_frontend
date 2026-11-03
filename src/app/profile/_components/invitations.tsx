"use client";

import { MailIcon } from "@/components/icons/mail";
import { Person2Icon } from "@/components/icons/person2";
import { Input } from "@/components/input";
import { Fragment, useState } from "react";
import friends from "@/mocks/friends.json";
import shops from "@/mocks/shops.json";
import { getInvitationDescription, getName } from "@/lib/utils";
import { InfoWithDot } from "@/components/info-with-dot";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShopIcon } from "@/components/icons/shop";
import { SafeGuardIcon } from "@/components/icons/safe-guard";

export const Invitations = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="bg-white flex flex-col rounded-[18px] border border-border">
        <div className="flex gap-3.5 p-4 md:p-5">
          <div className="bg-brand-400 w-10.5 h-10.5 flex items-center justify-center rounded-[12px]">
            <Person2Icon size={20} className="text-brand" />
          </div>
          <div>
            <p className="font-bold text-[18px]">Приглашения в друзья</p>
            <p className="text-[12px] text-text-secondary">
              Люди, которые хотят быть с вами на связи
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-3 bg-bg-secondary-400 py-3.5 px-4 md:px-5">
          <div className="w-60">
            <p className="font-semibold text-[12px]">Знаете кого позвать?</p>
            <p className="text-text-secondary text-[10px]">
              Отправим личную ссылку
            </p>
          </div>
          <Input
            containerClassName=""
            className={"w-full bg-white"}
            value={search}
            onChange={setSearch}
            placeholder="Email или номер телефона"
            leftElement={<MailIcon size={16} className="text-text-secondary" />}
          />
          <button className="text-brand w-full md:w-fit bg-bg-brand-400 h-10.5 px-4 rounded-[12px] font-semibold">
            Отправить
          </button>
        </div>
        <div className="flex flex-col gap-4 py-4 md:py-3">
          {friends.map((i, index) => (
            <Fragment key={`invitation_${index}`}>
              <div
                key={`invitation_${index}`}
                className="bg-white grid grid-cols-12 px-4 md:px-5 gap-2"
              >
                <div className="col-span-12 md:col-span-6 flex gap-3">
                  <Avatar size="lg" className={"col-start-1 col-span-1 w-18"}>
                    <AvatarImage
                      alt={getName(i.first_name, i.last_name, false, null)}
                    />
                    <AvatarFallback
                      className={"text-brand font-bold text-[12px]"}
                    >
                      {getName(i.first_name, i.last_name, true, null)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="  w-full">
                    <p className="font-bold ">
                      {getName(i.first_name, i.last_name, false, null)}
                    </p>
                    <p className="text-[12px] text-text-secondary">
                      {getInvitationDescription(
                        i.invite_accepted,
                        i.shared_subsriptions,
                      )}
                    </p>
                  </div>
                </div>

                <div className="col-start-1 md:col-start-7 col-span-6 md:col-span-1">
                  <InfoWithDot text="Новое" />
                </div>

                <div className="flex flex-col justify-end md:justify-start items-end md:items-start col-start-7 md:col-start-8 col-span-6 md:col-span-2">
                  <p className="text-[#89938E] text-[10px] hidden md:flex">
                    Получено
                  </p>
                  <p className="text-text-secondary text-[12px]">
                    Сегодня, 10:24
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2 col-start-1 md:col-start-10 col-span-12 md:col-span-3">
                  <button className="border border-border px-4 w-full md:w-fit rounded-[12px] h-9.5 font-semibold">
                    Отклонить
                  </button>
                  <button className="h-9.5 rounded-[12px] w-full md:w-fit bg-brand font-semibold px-4 text-white">
                    Принять
                  </button>
                </div>
              </div>
              {index !== friends.length - 1 ? (
                <div className="h-px w-full bg-border" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-[18px] border border-border flex flex-col gap-3">
        <div className="flex flex-row gap-3 p-4 md:p-5 pb-0 md:pb-0">
          <div className="bg-orange-400 size-10 w-10 h-10 flex items-center justify-center rounded-[12px]">
            <ShopIcon size={16} className="text-[#B86B12]" />
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <p className="text-[18px] font-bold">
              Стать продавцом или присоединиться к магазину
            </p>
            <p className="text-text-secondary text-[12px]">
              Предложения от владельцев магазинов с указанной ролью и сроком
              ответа
            </p>
          </div>
        </div>
        {shops.map((i, index) => (
          <div
            key={`shop_${index}`}
            className="grid grid-cols-12 gap-2 px-4 md:px-5"
          >
            <div className="flex gap-3 items-center col-start-1 col-span-12 md:col-span-5">
              <div className="w-10 h-10 rounded-[12px] flex items-center justify-center bg-brand-400">
                <ShopIcon size={16} className="text-brand" />
              </div>
              <div>
                <p className="font-bold">{i.title}</p>
                <p className="text-text-secondary text-[10px]">
                  {i.description}
                </p>
              </div>
            </div>
            <div className="col-start-1 md:col-start-6 col-span-12 md:col-span-3 flex w-full justify-between items-end md:items-center">
              <InfoWithDot text="Нужен ответ" />
              <p className="text-text-secondary text-[10px]">Сегодня, 09:15</p>
            </div>
            <div className="flex gap-2 col-start-1 md:col-start-9 col-span-12 md:col-span-4 items-end justify-end">
              <button className="h-9.5 w-full md:w-fit px-4 border border-border bg-white rounded-[12px] font-bold">
                Отклонить
              </button>
              <button className="h-9.5 w-full md:w-fit px-4 bg-brand rounded-[12px] font-bold text-white">
                Принять
              </button>
            </div>
          </div>
        ))}
        <div className="flex gap-2 bg-bg-secondary-400 p-4 md:p-5 rounded-bl-[18px] rounded-br-[18px]">
          <div className="w-4 h-4">
            <SafeGuardIcon size={16} className="text-brand" />
          </div>
          <p className="text-text-secondary text-[10px]">
            После принятия вы сможете переключиться в режим «Продавец». Права
            доступа настраивает владелец магазина.
          </p>
        </div>
      </div>
    </>
  );
};
