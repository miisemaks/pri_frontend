import type { Metadata } from "next";
import "@/app/globals.css";
import { MainHeader } from "@/components/main-header";

export const metadata: Metadata = {
  title: "Магазин",
  description: "Магазин",
};

export default function ShopLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
