"use client";

import clsx from "clsx";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  variant: ButtonVariant;
  label: string;
  size: ButtonSize;
  classNames: string;
  isDisabled: boolean;
  isLoading: boolean;
  children: ReactNode;
  onClick: () => void;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

const BUTTON_SIZES: Record<ButtonSize, string> = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-sm",
  large: "px-5 py-3 text-base",
};

export default function Button({
  variant,
  size,
  isDisabled,
  isLoading,
  classNames,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const isDisabledButton = isLoading || isDisabled;
  return (
    <button
      onClick={onClick}
      disabled={isDisabledButton}
      aria-disabled={isDisabled}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "transition-colors duration-200",
        VARIANT_STYLES[variant],
        BUTTON_SIZES[size],
        classNames
      )}
      {...props}
    >
      {isLoading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
        />
      )}

      {children}
    </button>
  );
}
