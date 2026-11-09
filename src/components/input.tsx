"use client";

import { Input as BaseInput, InputState } from "@base-ui/react/input";
import { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from "react";

type Props = {
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  error?: string;
  className?: string | ((state: InputState) => string | undefined) | undefined;
  containerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  leftElement?: ReactNode;
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
    containerClassName,
    leftElement,
  } = props;

  return (
    <div className={`flex flex-col w-full gap-1 ${containerClassName}`}>
      <div
        className={`
        flex flex-1 w-full items-center gap-3
        focus-within:outline-2 focus-within:outline-brand
          focus-within:border-none
        rounded-[12px]
        border px-3
        border-border
        ${error ? "focus-within:bg-danger-400" : "focus-within:bg-transparent"}
        ${error ? "border-danger" : "border-border"}
      `}
      >
        {leftElement}
        <BaseInput
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          autoFocus={autoFocus}
          className={className}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: 0,
            height: 46,
            borderRadius: 12,
            outline: "none",
            border: "none",
            backgroundColor: error ? "var(--color-danger-400)" : "transparent",
          }}
          type={type}
        />
      </div>

      {error ? (
        <label className="text-danger text-[12px]">{error}</label>
      ) : null}
    </div>
  );
};
