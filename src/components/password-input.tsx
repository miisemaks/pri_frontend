"use client";

import {
  forwardRef,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Input as BaseInput, InputState } from "@base-ui/react/input";
import { Eye, EyeClosed } from "lucide-react";
import { BaseUIEvent } from "@base-ui/react";

export type PasswordInputRef = {
  focus: () => void;
  blur: () => void;
};

type Props = {
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  error?: string;
  className?: string | ((state: InputState) => string | undefined) | undefined;
  placeholder?: string;
  leftElement?: ReactNode;
  onSubmit?: () => void;
  onKeyDown?: (event: BaseUIEvent<KeyboardEvent<HTMLInputElement>>) => void;
};

export const PasswordInput = forwardRef((props: Props, ref) => {
  const {
    value,
    onChange,
    disabled,
    autoFocus,
    error,
    className,
    placeholder,
    leftElement,
    onSubmit,
    onKeyDown,
  } = props;
  const [isShowPass, setIsShowPass] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus();
      },
      blur() {
        inputRef.current?.blur();
      },
    };
  });

  const handleContainerClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleClickEye = useCallback(() => {
    setIsShowPass(!isShowPass);
  }, [isShowPass]);

  return (
    <div className="flex flex-col gap-1">
      <div
        onClick={handleContainerClick}
        className={`
          flex flex-row items-center 
          gap-2 h-12 md:h-14 
          ${error ? "bg-danger-400" : "bg-transparent"} 
          border-border border p-3 rounded-[12px]
          focus-within:outline-2 focus-within:outline-brand
          focus-within:border-brand
        `}
      >
        {leftElement}
        <BaseInput
          ref={inputRef}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          autoFocus={autoFocus}
          className={"outline-none " + className}
          placeholder={placeholder}
          style={{
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            boxShadow: "none",
            padding: 0,
            height: "auto",
            borderRadius: 0,
            width: "100%",
            // flex: 1,
          }}
          type={isShowPass ? "text" : "password"}
          onSubmit={onSubmit}
          onKeyDown={onKeyDown}
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
});

PasswordInput.displayName = "PasswordInput";
