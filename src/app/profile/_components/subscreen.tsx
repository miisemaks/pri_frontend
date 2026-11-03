"use client";

import { HeartFavoriteIcon } from "@/components/icons/heart-favorite";
import { MessageBoxIcon } from "@/components/icons/message-box";
import { PersonIcon } from "@/components/icons/person";
import { SecurityIcon } from "@/components/icons/security";
import { useCallback } from "react";

type Props = {
  value: "personal_data" | "invitations" | "security" | "favorites";
  onChange: (
    data: "personal_data" | "invitations" | "security" | "favorites",
  ) => void;
};

export const Subscreen = (props: Props) => {
  const { value, onChange } = props;

  const handleClick = useCallback(
    (_value: "personal_data" | "invitations" | "security" | "favorites") => {
      onChange(_value);
    },
    [onChange],
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-1 bg-transparent md:bg-white md:border md:border-border md:rounded-[18px] md:p-2">
      <button
        className={`flex flex-row items-center px-3 gap-2 font-semibold h-11 ${value === "personal_data" ? "bg-brand-400 text-brand" : "bg-white border border-border md:border-none"} rounded-[12px] md:rounded-[8px] text-[12px] md:text-[14px]`}
        onClick={() => handleClick("personal_data")}
      >
        <PersonIcon
          size={16}
          className={`${value === "personal_data" ? "text-brand" : "text-text-secondary"}`}
        />
        Личные данные
      </button>
      <button
        className={`flex flex-row items-center px-3 gap-2 font-semibold h-11 ${value === "invitations" ? "bg-brand-400 text-brand" : "bg-white border border-border md:border-none"} rounded-[12px] md:rounded-[8px] text-[12px] md:text-[14px]`}
        onClick={() => handleClick("invitations")}
      >
        <MessageBoxIcon
          size={16}
          className={`${value === "invitations" ? "text-brand" : "text-text-secondary"}`}
        />
        Приглашения
      </button>
      <button
        className={`flex flex-row items-center px-3 gap-2 font-semibold h-11 ${value === "security" ? "bg-brand-400 text-brand" : "bg-white border border-border md:border-none"} rounded-[12px] md:rounded-[8px] text-[12px] md:text-[14px]`}
        onClick={() => handleClick("security")}
      >
        <SecurityIcon
          size={16}
          className={`${value === "security" ? "text-brand" : "text-text-secondary"}`}
        />
        Безопасность
      </button>
      <button
        className={`flex flex-row items-center px-3 gap-2 font-semibold h-11 ${value === "favorites" ? "bg-brand-400 text-brand" : "bg-white border border-border md:border-none"} rounded-[12px] md:rounded-[8px] text-[12px] md:text-[14px]`}
        onClick={() => handleClick("favorites")}
      >
        <HeartFavoriteIcon
          size={16}
          className={`${value === "favorites" ? "text-brand" : "text-text-secondary"}`}
        />
        Избранное
      </button>
    </div>
  );
};
