import React, { useState } from 'react';
import { NAVIGATION_ITEMS } from '../config/navigation';
import { SidebarItem } from './SidebarItem';

export interface UserProfileBadgeProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

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
            className="flex h-30 w-45 object-contain mb-12 self-start items-center justify-center pl-4"
          />
        </div>

        {/* Navigation */}
        {/* Reemplaza la línea del <nav> por esta versión estilizada */}
        <nav className="flex-1 px-3 py-6 overflow-y-auto space-y-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
          {NAVIGATION_ITEMS.map((item) => (
            <SidebarItem
              key={item.name}
              item={item}
              expandedItems={expandedItems}
              onToggle={toggleFolder}
              onCloseMobile={onClose}
            />
          ))}
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
              <p className="text-sm font-medium text-white truncate">{userProfile.name}</p>
              <p className="text-xs text-white/60 truncate">{userProfile.email}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
