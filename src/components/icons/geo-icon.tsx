export const GeoIcon = ({
  size = 24,
  color = "#17211D",
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_12461)">
        <path
          d="M11.9167 1.0829L1.625 5.9579L5.95833 7.04123L7.04167 11.3746L11.9167 1.0829Z"
          stroke={color}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_12461">
          <rect width="13" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
