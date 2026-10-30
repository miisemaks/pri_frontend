"use client";

import { LogoIcon } from "./icons/logo";
import { usePathname, useRouter } from "next/navigation";
import { MapPin } from "./icons/map-pin";
import { SwitchUserMode } from "./switch-user-mode";
import { useCallback, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/auth-store";

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
  const { isAuth } = useAuthStore();

  const handleMainLogo = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleLogin = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <header className="flex flex-row items-center justify-center bg-white">
      <div className="flex flex-row h-16 items-center justify-between px-4 gap-4 max-w-360 bg-white w-full">
        <button
          className="flex flex-row h-16 items-center gap-2"
          onClick={handleMainLogo}
        >
          <LogoIcon className="text-brand" />
          <p className="text-2xl font-bold">Рядом</p>
        </button>

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
        <div className="md:hidden">
          {isAuth ? (
            <button>User</button>
          ) : (
            <button className="font-semibold text-brand" onClick={handleLogin}>
              Войти
            </button>
          )}
        </div>
        <div className="hidden md:flex flex-row gap-2 items-center">
          <button className="flex flex-row items-center justify-center gap-1 cursor-pointer">
            <MapPin className="text-text-secondary" />
            <p className="text-text-secondary">Якутск</p>
          </button>
          <SwitchUserMode
            value={userMode}
            onChange={(value) => setUserMode(value)}
          />
          {isAuth ? (
            <Avatar size="lg" onClick={() => {}} className={"cursor-pointer"}>
              <AvatarImage
                //   src="https://github.com/shadcn.png"
                alt="@shadcn"
                //   className={"grayscale"}
              />
              <AvatarFallback>Новый пользователь</AvatarFallback>
            </Avatar>
          ) : (
            <button
              className="text-brand font-semibold bg-bg-brand-400 px-4 py-1 rounded-[12px]"
              onClick={handleLogin}
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
