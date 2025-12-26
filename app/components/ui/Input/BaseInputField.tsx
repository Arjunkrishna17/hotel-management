import React from "react";

interface BaseInputFieldProps {
  id: string;
  label?: string;
  helpText?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export default function BaseInputField({
  id,
  label,
  helpText,
  error,
  required = false,
  children,
}: BaseInputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          className="text-sm font-medium text-gray-900 flex items-center gap-1"
          htmlFor={id}
        >
          {label}
          {required && (
            <span className="text-red-500" aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      {children}

      {helpText && !error && (
        <p id={`${id}-help`} className="text-xs text-gray-500 leading-relaxed">
          {helpText}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          className="text-xs text-red-600 flex items-center gap-1"
          role="alert"
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
