import React from 'react';
import { Search, Menu } from 'lucide-react';

export interface HeaderProps {
  currentSectionTitle?: string;
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentSectionTitle, onMenuClick }) => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-[#F4F5F9] border-b border-gray-200 shrink-0 h-16 gap-4">
      {onMenuClick && (
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none -ml-2 p-2"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}
      <div className="flex-1 min-w-0">
        {currentSectionTitle && (
          <h1 className="text-xl font-semibold text-gray-800 truncate">
            {currentSectionTitle}
          </h1>
        )}
      </div>

      <div className="flex items-center justify-end flex-1 w-full max-w-md ml-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#014A24] focus:border-transparent sm:text-sm transition-colors duration-200 cursor-not-allowed"
            placeholder="Busca cualquier cosa aquí..."
            disabled
          />
        </div>
      </div>
    </header>
  );
};
