import { ProductIcon } from "@/components/icons/product";
import { ShopIcon } from "@/components/icons/shop";

type Props = {
  shopCount: number;
  productCount: number;
};

export const Head = (props: Props) => {
  const { shopCount, productCount } = props;

  return (
    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-2">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[22px] md:text-[30px]">Избранное</p>
        <label className="text-text-secondary text-[12px] md:text-[14px]">
          Любимые магазины и товары - всегда под рукой
        </label>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row items-center gap-1 border border-border bg-white px-3 py-2 rounded-[12px]">
          <ShopIcon size={16} className="text-brand" />
          <label className="font-semibold text-[12px]">
            {shopCount} магазина
          </label>
        </div>
        <div className="flex flex-row items-center gap-1 border border-border bg-white px-3 py-2 rounded-[12px]">
          <ProductIcon size={16} className="text-brand" />
          <label className="font-semibold text-[12px]">
            {productCount} товара
          </label>
        </div>
      </div>
    </div>
  );
};
