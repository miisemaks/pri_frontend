import type { Metadata } from "next";
import "@/app/globals.css";
import { AppProvider } from "@/context/app-context";
import { MainHeader } from "@/components/main-header";

export const metadata: Metadata = {
  title: "Магазин",
  description: "Магазин",
};

export default function ShopLayout({ children }: LayoutProps<"/">) {
  return (
    <AppProvider>
      <MainHeader />
      {children}
    </AppProvider>
  );
}
