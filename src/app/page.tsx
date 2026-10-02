"use client";

import { MainHeader } from "@/components/main-header";

export default function BuyerHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <MainHeader />
      <main className="mx-auto grid w-full max-w-7xl gap-4 px-4 pb-36 sm:gap-6 sm:px-6 sm:pb-28 lg:grid-cols-[1.15fr_1fr]"></main>
    </div>
  );
}
