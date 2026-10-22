export const MinusIcon = ({
  size = 24,
  color = "#68736E",
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
      <path d="M3.3328 8H12.6672" strokeLinecap="round" stroke={color} />
    </svg>
  );
};
