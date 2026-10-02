"use client";

import { LogoIcon } from "./icons/logo";
import { usePathname, useRouter } from "next/navigation";
import { MapPin } from "./icons/map-pin";
import { SwitchUserMode } from "./switch-user-mode";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ButtonLink = ({
  title,
  onPress,
  active,
}: {
  title: string;
  onPress: () => void;
  active: boolean;
}) => {
  return (
    <button
      className={`px-3 py-2 ${active ? "bg-brand-400" : ""} rounded-xl ${active ? "text-text-brand" : "text-text-secondary"} ${active ? "font-bold" : "font-medium"} cursor-pointer`}
      onClick={onPress}
    >
      {title}
    </button>
  );
};

export const MainHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [userMode, setUserMode] = useState<"customer" | "seller">("customer");

  return (
    <header className="flex flex-row items-center justify-center bg-white">
      <div className="flex flex-row h-16 items-center justify-between px-4 gap-4 max-w-360 bg-white w-full">
        <div className="flex flex-row h-16 items-center gap-2">
          <LogoIcon />
          <p className="text-2xl font-bold">Рядом</p>
        </div>

        <div className="flex-row gap-2 items-center w-full hidden md:flex">
          <ButtonLink
            title="Каталог"
            active={pathname === "/"}
            onPress={() => {
              router.push("/");
            }}
          />
          <ButtonLink
            title="Избранное"
            active={pathname === "/favorites"}
            onPress={() => {
              router.push("/favorites");
            }}
          />
          <ButtonLink
            title="Мои магазины"
            active={pathname === "/my-shops"}
            onPress={() => {
              router.push("/my-shops");
            }}
          />
        </div>
        <div className="hidden md:flex flex-row gap-2 items-center">
          <button className="flex flex-row items-center justify-center gap-1 cursor-pointer">
            <MapPin />
            <p className="text-text-secondary">Якутск</p>
          </button>
          <SwitchUserMode
            value={userMode}
            onChange={(value) => setUserMode(value)}
          />
          <Avatar size="lg" onClick={() => {}} className={"cursor-pointer"}>
            <AvatarImage
              //   src="https://github.com/shadcn.png"
              alt="@shadcn"
              //   className={"grayscale"}
            />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
