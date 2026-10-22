"use client";

import { useParams } from "next/navigation";
import { ShopInfo } from "./_components/shop-info";
import { ProductInfo } from "./_components/product-info";
import { ProductImageListViewer } from "@/components/product-image-list-viewer";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchProductMock } from "@/api/products";

const Page = () => {
  const params = useParams<{ id: string }>();
  const { data } = useSuspenseQuery({
    queryKey: ["product", params?.id],
    queryFn: () => fetchProductMock(params.id ? +params.id : 0),
  });

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-8 gap-4">
        <ProductImageListViewer images={data?.images ?? []} />
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
