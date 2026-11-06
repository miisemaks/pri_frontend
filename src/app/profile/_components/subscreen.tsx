"use client";

import { HeartFavoriteIcon } from "@/components/icons/heart-favorite";
import { MessageBoxIcon } from "@/components/icons/message-box";
import { PersonIcon } from "@/components/icons/person";
import { SecurityIcon } from "@/components/icons/security";

type Props = {
  value: "edit" | "invitations" | "security" | "favorites";
};

export const Subscreen = (props: Props) => {
  const { value } = props;

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-1 bg-transparent md:bg-white md:border md:border-border md:rounded-[18px] md:p-2">
      <a
        className={`flex flex-row items-center px-3 gap-2 font-semibold h-11 ${value === "edit" ? "bg-brand-400 text-brand" : "bg-white border border-border md:border-none"} rounded-[12px] md:rounded-[8px] text-[12px] md:text-[14px]`}
        href="/profile"
      >
        <PersonIcon
          size={16}
          className={`${value === "edit" ? "text-brand" : "text-text-secondary"}`}
        />
        Личные данные
      </a>
      <a
        className={`flex flex-row items-center px-3 gap-2 font-semibold h-11 ${value === "invitations" ? "bg-brand-400 text-brand" : "bg-white border border-border md:border-none"} rounded-[12px] md:rounded-[8px] text-[12px] md:text-[14px]`}
        href="profile/invitations"
      >
        <MessageBoxIcon
          size={16}
          className={`${value === "invitations" ? "text-brand" : "text-text-secondary"}`}
        />
        Приглашения
      </a>
      <a
        className={`flex flex-row items-center px-3 gap-2 font-semibold h-11 ${value === "security" ? "bg-brand-400 text-brand" : "bg-white border border-border md:border-none"} rounded-[12px] md:rounded-[8px] text-[12px] md:text-[14px]`}
        href="security"
      >
        <SecurityIcon
          size={16}
          className={`${value === "security" ? "text-brand" : "text-text-secondary"}`}
        />
        Безопасность
      </a>
      <a
        className={`flex flex-row items-center px-3 gap-2 font-semibold h-11 ${value === "favorites" ? "bg-brand-400 text-brand" : "bg-white border border-border md:border-none"} rounded-[12px] md:rounded-[8px] text-[12px] md:text-[14px]`}
        href="favorites"
      >
        <HeartFavoriteIcon
          size={16}
          className={`${value === "favorites" ? "text-brand" : "text-text-secondary"}`}
        />
        Избранное
      </a>
    </div>
  );
};
