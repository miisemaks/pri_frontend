import { IconProps } from "@/lib/types";

/**
 * @component
 * @property {className} - цвета используй text-text-primary
 * @property {number} [size=24] - размер иконки
 *
 * @example <ArrowRight size={16} className="text-brand" />
 */
export const ArrowRight = ({ size = 24, className }: IconProps) => {
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
        d="M3.33279 7.99996H12.6672M7.99999 12.6672L12.6672 7.99996L7.99999 3.33276"
        strokeLinecap="round"
        stroke={"currentColor"}
      />
    </svg>
  );
};
