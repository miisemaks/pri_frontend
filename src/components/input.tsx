"use client";

import { Input as BaseInput, InputState } from "@base-ui/react/input";
import { HTMLInputTypeAttribute } from "react";

type Props = {
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  error?: string;
  className?: string | ((state: InputState) => string | undefined) | undefined;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
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
    type,
  } = props;

  return (
    <div className="flex flex-col gap-1">
      <BaseInput
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        autoFocus={autoFocus}
        className={className}
        placeholder={placeholder}
        style={{
          padding: 12,
          borderRadius: 12,
          border: error
            ? "1px solid var(--color-danger)"
            : "1px solid var(--color-border)",
          backgroundColor: error ? "var(--color-danger-400)" : "transparent",
        }}
        type={type}
      />
      {error ? (
        <label className="text-danger text-[12px]">{error}</label>
      ) : null}
    </div>
  );
};
