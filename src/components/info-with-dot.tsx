type Props = {
  text?: string;
  bg?: string;
  textColor?: string;
  foreground?: string;
};

export const InfoWithDot = (props: Props) => {
  const {
    text = "В наличии",
    bg = "bg-brand",
    textColor = "text-text-brand",
    foreground = "bg-bg-brand-400",
  } = props;

  return (
    <div
      className={`flex flex-row gap-1 items-center ${foreground} w-fit p-2 rounded-[100px]`}
    >
      <div className={`size-1.5 ${bg} rounded-[6px]`} />
      <p className={`text-[12px] font-semibold ${textColor}`}>{text}</p>
    </div>
  );
};
