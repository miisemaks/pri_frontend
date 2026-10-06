"use client";

import { FilterIcon } from "@/components/icons/filter";
import { Map } from "@/components/icons/map";
import { MainHeader } from "@/components/main-header";
import { ShopCategory } from "@/components/shop-category";
import { ShopItem } from "@/components/shop-item";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import shops from "@/mocks/shops.json";
import shop_categories from "@/mocks/shop-categories.json";

export default function BuyerHomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen">
      <MainHeader />
      <main className="flex flex-col items-center w-full">
        <div className="flex flex-col max-w-360 w-full gap-4 px-4 md:px-6 py-4 md:py-8 md:gap-8 sm:gap-6 sm:px-6">
          <div className="flex flex-col md:flex-row gap-4 align-bottom ">
            <div className="flex flex-col flex-1 gap-2">
              <p className="text-text-brand font-semibold text-[12px] md:text-xs">
                МАГАЗИНЫ РЯДОМ С ВАМИ
              </p>
              <p className="text-[20px] md:text-[42px] font-bold">
                Всё нужное — по соседству
              </p>
              <p className="text-[14px] md:text-[17px] font-normal text-text-secondary">
                Находите локальные магазины, проверяйте наличие и забирайте
                покупки без ожидания.
              </p>
            </div>
            <div className="flex flex-row self-auto md:self-end gap-3.5 bg-bg-brand-400 h-fit p-4.5 rounded-[18px]">
              <div className="flex items-center justify-center size-11 bg-white rounded-[12px]">
                <Map />
              </div>
              <div className="gap-1">
                <p className="font-semibold">214 мест поблизости</p>
                <p className="text-text-secondary text-[12px]">
                  В радиусе 5 км от центра
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Магазин, товар или категория"
              className="h-11.5 rounded-[12px]"
            />
            <button className="flex flex-row justify-center items-center py-3.25 px-5.25 gap-2 rounded-[12px] bg-white w-11 md:w-fit h-11 md:h-full">
              <FilterIcon />
              <label className="hidden md:flex font-semibold cursor-pointer">
                Фильтр
              </label>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-2.5">
            {shop_categories.map((i, index) => (
              <ShopCategory
                key={`category_${index}`}
                title={i.title}
                description={i.description}
                onPress={() => {}}
              />
            ))}
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row gap-0 md:gap-2 md:items-end">
              <p className="font-bold text-[18px] md:text-[24px]">
                Рекомендуем рядом
              </p>
              <p className="text-[12px] text-text-secondary md:mb-1">
                24 магазина
              </p>
            </div>
            <button>
              <p className="text-text-secondary text-[12px]">Сначала ближе</p>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4.5">
            {shops.map((i, index) => (
              <ShopItem
                key={`shop_${index}`}
                title={i.title}
                description={i.description}
                rating={i.rating}
                distance={i.distance}
                address={i.address}
                image={i.image}
                href={`/shops/${i.id}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
