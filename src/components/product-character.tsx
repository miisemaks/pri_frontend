import { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  label: string;
  value: string;
};

export const ProductCharacter = (props: Props) => {
  const { icon, label, value } = props;
  return (
    <div className="flex flex-1 flex-col p-3 rounded-[12px] gap-1 bg-bg-brand-400">
      {icon}
      <label className="text-[12px] text-text-secondary">{label}</label>
      <p className="font-semibold text-[12px]">{value}</p>
    </div>
  );
};
