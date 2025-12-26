import { useId, useState } from "react";
import BaseInputField from "./BaseInputField";
import clsx from "clsx";

interface InputProps {
  type: "text" | "password" | "email";
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  helpText?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onIconClick?: () => void;
}

export default function Input({
  type,
  placeholder,
  onChange,
  value,
  helpText,
  label,
  error,
  className,
  disabled = false,
  required = false,
  name,
  icon,
  iconPosition = "left",
  onIconClick,
}: InputProps) {
  const id = useId();
  const hasIcon = !!icon;
  const isIconClickable = !!onIconClick;

  return (
    <BaseInputField
      label={label}
      error={error}
      helpText={helpText}
      id={id}
      required={required}
    >
      <div className="relative w-full">
        {icon && iconPosition === "left" && (
          <div
            className={clsx(
              "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
              isIconClickable
                ? "cursor-pointer hover:text-gray-600 transition-colors"
                : "pointer-events-none"
            )}
            onClick={onIconClick}
            role={isIconClickable ? "button" : undefined}
            tabIndex={isIconClickable ? 0 : undefined}
          >
            {icon}
          </div>
        )}

        <input
          className={clsx(
            "w-full h-11 rounded-lg border px-4 py-2.5 text-sm outline-none transition-all duration-200",
            "placeholder:text-gray-400",
            "hover:border-gray-400",
            "focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
            "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-200",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
              : "border-gray-300",
            hasIcon && iconPosition === "left" && "pl-10",
            hasIcon && iconPosition === "right" && "pr-10",
            className
          )}
          placeholder={placeholder}
          type={type}
          name={name || label}
          id={id}
          onChange={onChange}
          value={value}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${id}-error` : helpText ? `${id}-help` : undefined
          }
        />

        {icon && iconPosition === "right" && (
          <div
            className={clsx(
              "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",
              isIconClickable
                ? "cursor-pointer hover:text-gray-600 transition-colors"
                : "pointer-events-none"
            )}
            onClick={onIconClick}
            role={isIconClickable ? "button" : undefined}
            tabIndex={isIconClickable ? 0 : undefined}
          >
            {icon}
          </div>
        )}
      </div>
    </BaseInputField>
  );
}
