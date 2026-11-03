"use client";

import { motion } from "framer-motion";
import { memo } from "react";

type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const Switch = memo((props: Props) => {
  const { value, onChange } = props;

  return (
    <motion.button
      onClick={() => onChange(!value)}
      type="button"
      role="switch"
      aria-checked={value}
      animate={{
        backgroundColor: value
          ? "var(--color-brand)"
          : "var(--color-bg-secondary)",
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 30,
      }}
      className={`w-10.5 h-6 rounded-[100px] ${value ? "bg-brand" : "bg-bg-secondary"} relative flex items-center px-0.75 p-0.75`}
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        animate={{
          x: value ? 18 : 0,
        }}
        className="w-4.5 h-4.5 rounded-[18px] bg-white"
      />
    </motion.button>
  );
});

Switch.displayName = "Switch";

export { Switch };
