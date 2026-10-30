import { Input as BaseInput, InputState } from "@base-ui/react/input";

type Props = {
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  error?: string;
  className?: string | ((state: InputState) => string | undefined) | undefined;
  placeholder?: string;
};

export const Input = (props: Props) => {
  const {
    value,
    onChange,
    disabled,
    autoFocus,
    error,
    className,
    placeholder,
  } = props;

  return (
    <div className="flex flex-col gap-1">
      <BaseInput
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        autoFocus={autoFocus}
        className={className}
        placeholder={placeholder}
        style={{
          border: error ? "1px solid var(--color-danger)" : undefined,
          backgroundColor: error ? "var(--color-danger-400)" : undefined,
        }}
      />
      {error ? (
        <label className="text-danger text-[12px]">{error}</label>
      ) : null}
    </div>
  );
};
