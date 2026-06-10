import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, placeholder, error, type = "text", className = "", ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        const isPassword = type === "password";
        // Password y showPassword es true
        // cambiamos el tipo nativo a "text"
        const inputType = isPassword ? (showPassword ? "text" : "password") : type;

        return (
            <div className="flex flex-col gap-1 w-full mb-4">
                {label && (
                    <label className="block mb-1.5 text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}

                <div className="relative">
                    <input
                        ref={ref}
                        type={inputType}
                        placeholder={placeholder}
                        className={`w-full px-4 py-3 border rounded-lg outline-none transition-all duration-200 text-sm bg-gray-50/50
              ${isPassword ? "pr-12" : "pr-4"}
              ${error
                                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border-gray-300 focus:border-[#014A24] focus:ring-2 focus:ring-[#014A24]/10"
                            }
              ${className}
            `}
                        {...props}
                    />

                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#014A24] transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    )}
                </div>

                {error && (
                    <span className="text-xs text-red-500 font-medium mt-0.5">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';