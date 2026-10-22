import type { Metadata } from "next";
import "@/app/globals.css";
import { MainHeader } from "@/components/main-header";

export const metadata: Metadata = {
  title: "Товар",
  description: "Страница товара",
};

export default function ProductLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
