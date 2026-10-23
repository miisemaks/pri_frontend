import { ProductItem } from "@/components/product-item";
import products_mock from "@/mocks/products.json";

export const ProductContainer = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col items-start gap-2">
        <h4 className="font-bold text-[18px] md:text-[22px]">Магазины</h4>
        <label className="text-text-secondary text-[12px]">
          Наличие обновляется магазинами
        </label>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-6 gap-4">
        {products_mock.map((i) => (
          <ProductItem
            key={i.id}
            title={i.title}
            description={i.description ?? ""}
            image={i.image}
            price={i.price}
            href={`/products/${i.id}`}
          />
        ))}
      </div>
    </div>
  );
};
