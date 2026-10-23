import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 gap-4 md:gap-6">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-2">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[22px] md:text-[30px]">Избранное</p>
          <label className="text-text-secondary text-[12px] md:text-[14px]">
            Любимые магазины и товары - всегда под рукой
          </label>
        </div>
        <div className="flex flex-row gap-2">
          <Skeleton className="w-30 h-8 rounded-[12px] bg-white" />
          <Skeleton className="w-30 h-8 rounded-[12px] bg-white" />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-row items-center justify-between">
          <h4 className="font-bold text-[18px] md:text-[22px]">Магазины</h4>
          <Skeleton className="w-28 h-6 rounded-[8px] bg-white" />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={`skeleton_${i}`}
              className="w-full h-100 rounded-[16px] bg-white"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col items-start gap-2">
          <h4 className="font-bold text-[18px] md:text-[22px]">Магазины</h4>
          <label className="text-text-secondary text-[12px]">
            Наличие обновляется магазинами
          </label>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-6 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={`skeleton_product_${i}`}
              className="w-full h-80 roudned-[16px] bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
