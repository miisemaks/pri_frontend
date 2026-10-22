"use client";

import { useParams } from "next/navigation";
import { ShopInfo } from "./_components/shop-info";
import { ProductInfo } from "./_components/product-info";
import { ProductImageListViewer } from "@/components/product-image-list-viewer";

const Page = () => {
  const params = useParams<{ id: string }>();
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-8 gap-4">
        <ProductImageListViewer
          images={[
            "https://main-cdn.sbermegamarket.ru/big1/hlr-system/183/234/848/992/514/29/100039746252b0.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcVQiUFiaqhTUyGu36h7Er8fy_cgfJjHcZYnbssgzAQ&s=10",
            "https://main-cdn.sbermegamarket.ru/big1/hlr-system/183/234/848/992/514/29/100039746252b0.jpg",
          ]}
        />
        <div className="flex flex-col px-4 md:px-8 gap-4">
          <ProductInfo />
        </div>
      </div>
      <div className="px-4 md:px-8 pb-4 md:pb-8">
        <ShopInfo companyId={1} />
      </div>
    </div>
  );
};

export default Page;
