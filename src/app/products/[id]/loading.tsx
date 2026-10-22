"use client";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-8 gap-4">
        <div className="flex flex-col items-start md:justify-end justify-start md:flex-row-reverse gap-2 px-0 md:px-8">
          <Skeleton className="w-126 h-126 rounded-[12px] bg-white" />
          <div className="flex flex-row md:flex-col gap-2 px-4 md:px-0 w-full md:w-12 h-12 md:h-full">
            {[1, 2, 3].map((i) => (
              <Skeleton
                key={`sk_${i}`}
                className="w-12 h-12 rounded-[12px] bg-white"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col px-4 md:px-8 gap-4">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-2">
              <Skeleton className="w-20 h-7 rounded-[12px] bg-white" />
              <Skeleton className="w-20 h-7 rounded-[12px] bg-white" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-3/4 h-8 bg-white rounded-[12px]" />
              <Skeleton className="w-full h-6 rounded-[12px] bg-white" />
            </div>
            <div className="flex flex-row items-end gap-3">
              <Skeleton className="w-1/3 h-8 rounded-[12px] bg-white" />
            </div>
            <Skeleton className="w-full h-6 rounded-[12px] bg-white" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              <Skeleton className="w-full aspect-square size-full bg-white rounded-[12px]" />
              <Skeleton className="w-full size-full bg-white rounded-[12px]" />
              <Skeleton className="w-full size-full bg-white rounded-[12px]" />
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Skeleton className="w-25 h-9 bg-white rounded-[12px]" />
              <Skeleton className="w-full h-10 bg-white rounded-[12px]" />
            </div>
            <div className="flex flex-row items-center justify-between">
              <Skeleton className="w-full size-full bg-white rounded-[12px]" />
              <Skeleton className="w-25 size-full bg-white rounded-[12px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 pb-4 md:pb-8">
        <Skeleton className="w-full h-25 rounded-[16px] bg-white" />
      </div>
    </div>
  );
};

export default Loading;
