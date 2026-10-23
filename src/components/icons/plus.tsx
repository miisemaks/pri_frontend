import { IconProps } from "@/lib/types";

export const PlusIcon = ({ size = 24, className }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.3328 7.99996H8M8 7.99996H12.6672M8 7.99996V3.33276M8 7.99996V12.6672"
        strokeLinecap="round"
        stroke={"currentColor"}
      />
    </svg>
  );
};
