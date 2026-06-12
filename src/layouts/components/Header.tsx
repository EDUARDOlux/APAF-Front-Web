import React from 'react';
import { Menu } from 'lucide-react';
import { type HeaderData } from '../config/header';
import { GlobalSearch } from '../../components/ui/GlobalSearch';

export interface HeaderProps {
  data: HeaderData;
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ data, onMenuClick }) => {
  return (
    <header className="flex flex-col lg:flex-row lg:items-center justify-between px-4 sm:px-6 py-4 sm:py-6 bg-[#F4F5F9] border-b border-gray-200 shrink-0 gap-4 lg:gap-8">

      {/* Bloque 1: Agrupación del Menú y Textos */}
      <div className="flex w-full lg:w-auto items-start lg:items-center gap-3">
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none -ml-2 shrink-0"
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        <div className="flex-1 min-w-0 flex flex-col justify-center">
          {data.classification && (
            <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
              {data.classification}
            </p>
          )}
          {data.title && (
            <h1 className="text-xl sm:text-2xl font-bold text-[#014A24] truncate">
              {data.title}
            </h1>
          )}
          {data.description && (
            <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate">
              {data.description}
            </p>
          )}
        </div>
      </div>

      {/* Bloque 2: Contenedor del Buscador */}
      <div className="w-full lg:max-w-md lg:ml-auto">
        <GlobalSearch
          placeholder="Busca cualquier cosa aquí..."
          disabled={true}
        />
      </div>

    </header>
  );
};
