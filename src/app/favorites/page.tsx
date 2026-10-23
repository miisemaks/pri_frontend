"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Head } from "./_components/head";
import { ProductContainer } from "./_components/product-container";
import { ShopContainer } from "./_components/shop-container";
import { fetchShopFavoriteMock } from "@/api/shops";
import { fetchProductsMock } from "@/api/products";

export default function Favorites() {
  const { data } = useSuspenseQuery({
    queryKey: ["favorites"],
    queryFn: () =>
      Promise.all([fetchShopFavoriteMock, fetchProductsMock]).then(
        ([result1, result2]) => {
          return {
            shops: result1,
            products: result2,
          };
        },
      ),
  });

  return (
    <div className="flex flex-col p-4 md:p-8 gap-4 md:gap-6">
      <Head shopCount={data.shops.length} productCount={data.products.length} />
      <ShopContainer />
      <ProductContainer />
    </div>
  );
}
