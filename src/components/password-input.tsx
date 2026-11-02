"use client";

import { useCallback, useState } from "react";
import { Input as BaseInput, InputState } from "@base-ui/react/input";
import { Eye, EyeClosed } from "lucide-react";

type Props = {
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  error?: string;
  className?: string | ((state: InputState) => string | undefined) | undefined;
  placeholder?: string;
};

export const PasswordInput = (props: Props) => {
  const {
    value,
    onChange,
    disabled,
    autoFocus,
    error,
    className,
    placeholder,
  } = props;
  const [isShowPass, setIsShowPass] = useState(false);

  const handleClickEye = useCallback(() => {
    setIsShowPass(!isShowPass);
  }, [isShowPass]);

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`flex flex-row gap-2 h-12 md:h-14 ${error ? "bg-danger-400" : "bg-transparent"} border-border border p-3 rounded-[12px]`}
      >
        <BaseInput
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          autoFocus={autoFocus}
          className={className}
          placeholder={placeholder}
          style={{
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            padding: 0,
            height: "auto",
            borderRadius: 0,
            width: "100%",
            // flex: 1,
          }}
          type={isShowPass ? "text" : "password"}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClickEye();
          }}
        >
          {isShowPass ? (
            <Eye color="var(--color-text-secondary)" size={16} />
          ) : (
            <EyeClosed color="var(--color-text-secondary)" size={16} />
          )}
        </button>
      </div>
      {error ? (
        <label className="text-danger text-[12px]">{error}</label>
      ) : null}
    </div>
  );
};
