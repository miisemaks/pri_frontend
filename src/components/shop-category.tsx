type Props = {
  title: string;
  description: string;
  onPress: () => void;
};

export const ShopCategory = (props: Props) => {
  const { title, description, onPress } = props;
  return (
    <button
      className="bg-white rounded-[12px] flex flex-row p-3.25 gap-2.5 border-border border"
      onClick={onPress}
    >
      <div className="bg-bg-brand-400 w-9 h-9 rounded-[10px]"></div>
      <div className="flex flex-col items-start">
        <p className="font-semibold text-[12px]">{title}</p>
        <p className="text-[11px] text-text-secondary">{description}</p>
      </div>
    </button>
  );
};
