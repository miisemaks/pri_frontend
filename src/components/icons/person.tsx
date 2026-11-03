import { IconProps } from "@/lib/types";

export const PersonIcon = ({ size = 24, className }: IconProps) => {
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
        d="M7.99979 8.66667C9.84056 8.66667 11.3328 7.17428 11.3328 5.33333C11.3328 3.49238 9.84056 2 7.99979 2C6.15903 2 4.66679 3.49238 4.66679 5.33333C4.66679 7.17428 6.15903 8.66667 7.99979 8.66667ZM7.99979 8.66667C9.41414 8.66667 10.7706 9.22857 11.7707 10.2288C12.7707 11.229 13.3326 12.5855 13.3326 14M7.99979 8.66667C6.58545 8.66667 5.22903 9.22857 4.22893 10.2288C3.22884 11.229 2.66699 12.5855 2.66699 14"
        strokeWidth="1.6"
        strokeLinecap="round"
        stroke={"currentColor"}
      />
    </svg>
  );
};
