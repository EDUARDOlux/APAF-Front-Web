import React, { forwardRef } from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, error, className = "", ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-sm font-medium text-gray-700">
                    <input
                        ref={ref}
                        type="checkbox"
                        className={`
              w-4 h-4 rounded border-gray-300 text-[#014A24] accent-[#014A24] 
              focus:ring-[#014A24]/20 transition-all duration-200 cursor-pointer
              ${error ? "border-red-500 focus:ring-red-200" : "border-gray-300"}
              ${className}
            `}
                        {...props}
                    />
                    {label && <span>{label}</span>}
                </label>

                {error && (
                    <span className="text-xs text-red-500 font-medium mt-0.5">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';