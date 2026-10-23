import { useCallback, useState } from "react";
import { MinusIcon } from "./icons/minus";
import { PlusIcon } from "./icons/plus";

export const Counter = () => {
  const [count, setCount] = useState(1);
  const handleSubtract = useCallback(() => {
    setCount((state) => (state > 1 ? state - 1 : state));
  }, []);
  const handlePlus = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center border-border border px-3 bg-white rounded-[12px] h-11.5 gap-3 ">
      <button onClick={handleSubtract}>
        <MinusIcon
          size={16}
          className={`${count > 1 ? "text-text-primary" : "text-text-secondary"}`}
        />
      </button>
      <p className="font-semibold w-7 text-center">{count}</p>
      <button className="cursor-pointer" onClick={handlePlus}>
        <PlusIcon size={16} />
      </button>
    </div>
  );
};
