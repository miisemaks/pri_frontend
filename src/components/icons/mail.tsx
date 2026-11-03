import { IconProps } from "@/lib/types";

export const MailIcon = ({ size = 24, className }: IconProps) => {
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
        d="M14.6674 4.66701L8.67293 8.48462C8.46951 8.60275 8.23845 8.66498 8.00321 8.66498C7.76797 8.66498 7.53691 8.60275 7.33349 8.48462L1.33301 4.66701M14.6674 4.66701V4.00041C14.6674 3.2641 14.0704 2.66721 13.334 2.66721H2.66645C1.93001 2.66721 1.33301 3.2641 1.33301 4.00041V4.66701M14.6674 4.66701V11.9996C14.6674 12.7359 14.0704 13.3328 13.334 13.3328H2.66645C1.93001 13.3328 1.33301 12.7359 1.33301 11.9996V4.66701"
        strokeWidth="1.6"
        strokeLinecap="round"
        stroke="currentColor"
      />
    </svg>
  );
};
