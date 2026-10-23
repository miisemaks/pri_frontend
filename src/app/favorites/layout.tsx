import type { Metadata } from "next";
import "../globals.css";
import { MainHeader } from "@/components/main-header";

export const metadata: Metadata = {
  title: "Избранное",
  description: "Избранное пользователя",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-360">{children}</div>
      </div>
    </div>
  );
}
