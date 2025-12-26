"use client";

import clsx from "clsx";
import React from "react";
import { FaSpinner } from "react-icons/fa";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";
export type IconPosition = "left" | "right";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  fullWidth?: boolean;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200 active:bg-blue-800",
  secondary:
    "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-200 active:bg-gray-800",
  outline:
    "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-200",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-200 active:bg-red-800",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  children,
  loading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const baseStyles = clsx(
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg",
    "transition-all duration-200 outline-none",
    "focus:ring-4",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    fullWidth && "w-full"
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      type={type}
      className={clsx(
        baseStyles,
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        loading && "relative",
        className
      )}
      onClick={handleClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <FaSpinner
            className="h-5 w-5 animate-spin text-current"
            aria-hidden="true"
          />
        </span>
      )}

      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}

      <span className={clsx(loading && "opacity-0")}>{children}</span>

      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </button>
  );
}
