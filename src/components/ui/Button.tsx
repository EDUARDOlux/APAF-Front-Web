import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
}

export function Button({
    children,
    type = "button",
    disabled = false,
    className = "",
    fullWidth = true,
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`
            px-2 py-3 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center text-sm
            ${fullWidth ? "w-full" : "w-auto"}
            ${disabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#014A24] hover:bg-[#014A24]/90 active:scale-[0.98] shadow-md hover:shadow-lg"
                    }
            ${className}
        `}
            {...props}
        >
            {children}
        </button>
    );
}