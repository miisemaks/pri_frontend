import { ShopItem } from "@/components/shop-item";
import shops_mock from "@/mocks/shops.json";

export const ShopContainer = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-row items-center justify-between">
        <h4 className="font-bold text-[18px] md:text-[22px]">Магазины</h4>
        <button className="text-text-brand font-semibold text-[12px]">
          Смотреть на карте
        </button>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
        {shops_mock.map((i) => (
          <ShopItem
            key={i.id}
            title={i.title}
            address={i.address}
            description={i.description}
            distance={i.distance}
            rating={i.rating}
            image={i.image}
            href={`/shops/${i.id}`}
          />
        ))}
      </div>
    </div>
  );
};
