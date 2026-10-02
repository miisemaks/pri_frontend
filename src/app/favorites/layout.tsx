import type { Metadata } from "next";
import "../globals.css";
import { AppProvider } from "@/context/app-context";
import { MainHeader } from "@/components/main-header";

export const metadata: Metadata = {
  title: "Избранное",
  description: "Избранное пользователя",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <AppProvider>
      <MainHeader />
      {children}
    </AppProvider>
  );
}
