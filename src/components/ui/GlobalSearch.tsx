import React from 'react';
import { Search } from 'lucide-react';

export interface GlobalSearchProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  placeholder = 'Buscar...',
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        className={`block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#014A24] focus:border-transparent text-xs sm:text-base transition-colors duration-200 ${disabled ? 'cursor-not-allowed opacity-75' : ''
          }`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
