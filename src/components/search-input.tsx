import { LoopIcon } from "./icons/loop-icon";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const SearchInput = (props: Props) => {
  const { value, onChange, placeholder } = props;

  return (
    <div className="flex flex-row gap-2 items-center bg-white h-12 px-3 rounded-[12px] has-focus-visible:border-brand border has-focus-visible:ring-2 has-focus-visible:ring-brand">
      <LoopIcon size={18} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-0 focus:outline-none"
      />
    </div>
  );
};
