import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Users,
  Briefcase,
  PieChart,
  Activity,
  ChevronDown,
  ChevronRight,
  Wallet
} from 'lucide-react';

export interface NavigationItem {
  name: string;
  path?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
  requiredPermission?: string;
}

export interface UserProfileBadgeProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Cartera', path: '/cartera', icon: Briefcase },
  { name: 'Límite de concentración', path: '/limite-concentracion', icon: PieChart },
  { name: 'Gestión de Usuarios', path: '/usuarios', icon: Users },
  {
    name: 'Analisis cartera',
    icon: Wallet,
    children: [
      { name: 'Límite de Riesgos', path: '/analisis-cartera/limite-riesgos' },
    ]
  },
  {
    name: 'Analisis Financiero cartera',
    icon: Activity,
    children: [
      {
        name: 'Análisis Sucursal',
        children: [
          { name: 'Consolidada', path: '/analisis-cartera/financiero/sucursal/consolidada' },
          { name: 'Sucursales', path: '/analisis-cartera/financiero/sucursal/sucursales' }
        ]
      },
      {
        name: 'Análisis Cartera',
        children: [
          { name: 'Productos', path: '/analisis-cartera/financiero/cartera/productos' },
          { name: 'Tipo de Cartera vencida', path: '/analisis-cartera/financiero/cartera/vencida' },
          { name: 'Tipo de Cartera vigente', path: '/analisis-cartera/financiero/cartera/vigente' },
          { name: 'Cartera de Crédito Total', path: '/analisis-cartera/financiero/cartera/total' }
        ]
      },
      {
        name: 'Seguimiento',
        children: [
          { name: 'Cartera de Crédito', path: '/analisis-cartera/seguimiento/credito' },
          { name: 'Cartera consolidado', path: '/analisis-cartera/seguimiento/consolidado' },
        ]
      },
      { name: 'Cartera EPRC', path: '/analisis-cartera/seguimiento/eprc' }
    ]
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfileBadgeProps;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, userProfile }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleFolder = (folderName: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  const renderNavItems = (items: NavigationItem[], depth = 0) => {
    return items.map((item) => {
      const isFolder = !!item.children && item.children.length > 0;
      const isExpanded = expandedItems[item.name];

      const paddingLeft = `${depth * 1.5 + 0.75}rem`;

      if (isFolder) {
        return (
          <div key={item.name} className="flex flex-col">
            <button
              onClick={() => toggleFolder(item.name)}
              className="flex items-center justify-between w-full py-2.5 pr-3 rounded-lg transition-colors text-white/80 hover:bg-white/5 hover:text-white"
              style={{ paddingLeft }}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                {item.icon && <item.icon className="w-5 h-5 shrink-0" />}
                <span className="truncate text-left">{item.name}</span>
              </div>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 shrink-0 ml-2" />
              ) : (
                <ChevronRight className="w-4 h-4 shrink-0 ml-2" />
              )}
            </button>

            {isExpanded && (
              <div className="mt-1 space-y-1 flex flex-col">
                {renderNavItems(item.children!, depth + 1)}
              </div>
            )}
          </div>
        );
      }

      return (
        <NavLink
          key={item.path || item.name}
          to={item.path || '#'}
          onClick={() => {
            if (window.innerWidth < 1024) onClose();
          }}
          style={{ paddingLeft }}
          className={({ isActive }) =>
            `flex items-center gap-3 py-2.5 pr-3 rounded-lg transition-colors relative group overflow-hidden ${isActive
              ? 'bg-white/10 text-white font-medium'
              : 'text-white/80 hover:bg-white/5 hover:text-white'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
              )}
              {item.icon && <item.icon className="w-5 h-5 shrink-0" />}
              <span className="truncate">{item.name}</span>
            </>
          )}
        </NavLink>
      );
    });
  };

  // Iniciales del usuario
  const initials = userProfile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#014A24] text-white flex flex-col transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Header / Logo */}
        <div className="flex items-center justify-between h-30 px-6 shrink-0 border-b border-white bg-white">
          {/* Logo */}
          <img
            src="/src/assets/logoFederacion.png"
            alt="Federación Centro Sur"
            className="flex h-30 w-45 object-contain mb-12 self-start  items-center justify-center pl-4"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 overflow-y-auto space-y-1">
          {renderNavItems(NAVIGATION_ITEMS)}
        </nav>

        {/* User Profile Badge */}
        <div className="p-4 shrink-0 border-t border-white/10 bg-black/5">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            {userProfile.avatarUrl ? (
              <img
                src={userProfile.avatarUrl}
                alt={userProfile.name}
                className="w-10 h-10 rounded-full object-cover shrink-0 border border-white/20"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-medium text-sm text-white">
                {initials}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-white truncate">
                {userProfile.name}
              </p>
              <p className="text-xs text-white/60 truncate">
                {userProfile.email}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
