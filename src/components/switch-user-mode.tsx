import { motion } from "framer-motion";

type Props = {
  value: "customer" | "seller";
  onChange: (value: "customer" | "seller") => void;
};

export const SwitchUserMode = ({ value, onChange }: Props) => {
  return (
    <div
      className={`flex flex-row px-1 py-1 rounded-xl gap-2 h-9 bg-[#EEF3EF] relative`}
    >
      <button
        className={`${value === "customer" ? "text-black font-bold" : "text-text-secondary font-normal"} px-2.75 rounded-lg h-7 cursor-pointer z-1 relative`}
        onClick={() => {
          onChange("customer");
        }}
      >
        {value === "customer" && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-white rounded-lg -z-10 w-full"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        Покупатель
      </button>
      <button
        className={`${value === "seller" ? "text-black font-bold" : "text-text-secondary font-normal"} px-2.75 rounded-lg h-7 cursor-pointer z-1 relative`}
        onClick={() => {
          onChange("seller");
        }}
      >
        {value === "seller" && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-white rounded-lg -z-10 w-full"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
        Продавец
      </button>
    </div>
  );
};
