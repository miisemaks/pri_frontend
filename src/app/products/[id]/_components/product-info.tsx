import { Counter } from "@/components/counter";
import { BottleIcon } from "@/components/icons/bottle";
import { ScheduleIcon } from "@/components/icons/schedule";
import { SnowIcon } from "@/components/icons/snow";
import { InfoWithDot } from "@/components/info-with-dot";
import { ProductCharacter } from "@/components/product-character";
import { formatCurrency } from "@/lib/utils";

export const ProductInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-2">
        <InfoWithDot />
        <InfoWithDot
          text="Фермерский продукт"
          textColor="text-text-secondary"
          bg="bg-text-secondary"
          foreground="bg-bg-secondary-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[20px] md:text-[36px]">
          Молоко фермерское 3,5%
        </p>
        <p className="text-text-secondary">
          Экоферма «Сабинские луга» · Татарстан
        </p>
      </div>
      <div className="flex flex-row items-end gap-3">
        <p className="font-bold text-[24px] md:text-[30px]">
          {formatCurrency(120)}
        </p>
        <p className="text-text-secondary">за 1 бутылку · 1 л</p>
      </div>
      <p className="text-text-secondary">
        Свежее пастеризованное молоко без добавок. Привозим с фермы каждое утро
        — насыщенный вкус и естественная жирность.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        <ProductCharacter
          icon={<BottleIcon size={18} />}
          label="Состав"
          value="Цельное коровье молоко"
        />
        <ProductCharacter
          icon={<SnowIcon size={18} />}
          label="Хранение"
          value="+2…+6 °C"
        />
        <ProductCharacter
          icon={<ScheduleIcon size={18} />}
          label="Срок годности"
          value="5 суток"
        />
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Counter />
        <button className="h-10 bg-brand rounded-[12px] w-full text-white font-semibold">
          Добавить в список
        </button>
      </div>
      <div className="flex flex-row items-center justify-between">
        <label className="text-text-secondary">Доступное количество</label>
        <p className="font-semibold text-brand">12</p>
      </div>
    </div>
  );
};
