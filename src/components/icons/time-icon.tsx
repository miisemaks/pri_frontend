import { IconProps } from "@/lib/types";

export const TimeIcon = ({ size = 24, className }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.99999 4.49964V9H12.0002M16.5006 9C16.5006 13.1425 13.1425 16.5006 8.99999 16.5006C4.85752 16.5006 1.49939 13.1425 1.49939 9C1.49939 4.85753 4.85752 1.4994 8.99999 1.4994C13.1425 1.4994 16.5006 4.85753 16.5006 9Z"
        stroke={"currentColor"}
        strokeLinecap="round"
      />
    </svg>
  );
};
