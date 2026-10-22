import { useCallback } from "react";
import { ArrowRight } from "@/components/icons/arrow-right";
import { useRouter } from "next/navigation";
import { InfoWithDot } from "@/components/info-with-dot";

type Props = {
  companyId: number;
};

export const ShopInfo = (props: Props) => {
  const { companyId } = props;
  const router = useRouter();

  const handleNavigate = useCallback(() => {
    router.push(`/shops/${companyId}`);
  }, [companyId, router]);

  return (
    <div className="flex flex-col md:flex-row items-center p-4 md:p-4 gap-4.5 shadow-2xs border border-border rounded-[18px] bg-white">
      <div className="flex flex-row flex-1 gap-4.5 w-full md:w-fit">
        <div className="size-18">
          <div className="size-18 bg-bg-brand-400 flex items-center justify-center rounded-[12px] text-text-brand text-[12px] font-bold">
            Image
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <label className="text-text-secondary text-[12px]">
            Продается в магазине
          </label>
          <p className="font-bold text-[16px]">Фермерская лавка «Утро»</p>
          <div className="flex flex-row gap-3">
            <div className="text-[12px] text-text-secondary">
              ул. Баумана, 42 . 450 м
            </div>
            <div>
              <div className="text-[12px] text-text-secondary">до 21:00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full md:w-fit justify-between md:justify-center items-center gap-4.5 h-fit">
        <InfoWithDot text="Открыто" />
        <button
          className="flex flex-row items-center gap-2 border border-border rounded-[12px] py-3 px-4"
          onClick={handleNavigate}
        >
          <p className="font-semibold text-[12px] md:text-[14px]">
            Страница магазина
          </p>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
