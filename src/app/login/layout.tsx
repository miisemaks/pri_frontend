import type { Metadata } from "next";
import "../globals.css";
import { MainHeader } from "@/components/main-header";

export const metadata: Metadata = {
  title: "Авторизация",
  description: "Авторизация пользователя",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
