export const ArrowRight = ({
  size = 16,
  color = "#17211D",
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33279 7.99996H12.6672M7.99999 12.6672L12.6672 7.99996L7.99999 3.33276"
        strokeLinecap="round"
        stroke={color}
      />
    </svg>
  );
};
