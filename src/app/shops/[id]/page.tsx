"use client";
import shops from "@/mocks/shops.json";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { ImageIcon } from "@/components/icons/image";
import { ShopInfo } from "./_components/info";
import { ProductCategoryFilter } from "./_components/product-category-filter";
import { useState } from "react";
import { useParams } from "next/navigation";
import productCategories from "@/mocks/product-categories.json";
import { SearchInput } from "@/components/search-input";
import { ProductItem } from "@/components/product-item";

const ShopPage = () => {
  const params = useParams<{ id: string }>();
  // const { id } = await params;
  const data = shops.find((i) => i.id === +params?.id);
  const [productCategory, setProductCategory] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center w-full">
        <div className="flex flex-col max-w-360 w-full gap-4 px-4 md:px-6 py-4 md:py-8 md:gap-8 sm:gap-6 sm:px-6">
          <AspectRatio ratio={1360 / 260}>
            {data?.image ? (
              <Image src={data?.image} alt="Example" width={500} height={300} />
            ) : (
              <div className="w-full h-full flex items-center bg-white justify-center">
                <ImageIcon size={40} color="#68736E" />
              </div>
            )}
          </AspectRatio>
          <ShopInfo
            address={data?.address ?? ""}
            contact="+7 000 000-00-00"
            distance={data?.distance ?? 0}
            rating={data?.rating ?? 0}
            review={128}
          />
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-4.5">
            <div className="flex flex-col gap-0.5">
              <p className="font-bold text-[20px] md:text-[22px]">
                Товары в наличии
              </p>
              <label className="text-text-secondary text-[12px]">
                42 позиции · обновлено 12 минут назад
              </label>
            </div>
            <div className="min-w-full md:min-w-87">
              <SearchInput
                value={search}
                onChange={setSearch}
                placeholder="Поиск по товарам"
              />
            </div>
          </div>
          <ProductCategoryFilter
            value={productCategory}
            onChange={setProductCategory}
            categories={productCategories}
          />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {[1, 2, 3].map((i) => (
              <ProductItem
                key={`product_${i}`}
                title="Title"
                description="descr"
                price={200}
                image={null}
                href={`/products/${i}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
