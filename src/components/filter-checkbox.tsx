"use client";

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
  title: string;
};

export const FilterCheckbox = (props: Props) => {
  const { checked, onChange, title } = props;

  return (
    <button
      className="w-full bg-bg-secondary h-9.5 border border-border rounded-[12px] flex flex-row gap-2 items-center px-3"
      onClick={() => onChange(!checked)}
    >
      <div className="size-4.5 border border-border bg-white rounded-[6px] flex flex-col items-center justify-center">
        {checked ? <div className="size-2 bg-brand rounded-[12px]" /> : null}
      </div>
      <p className="font-semibold text-[12px]">{title}</p>
    </button>
  );
};
