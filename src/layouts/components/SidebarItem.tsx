import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { type NavigationItem } from '../config/navigation';

export interface SidebarItemProps {
  item: NavigationItem;
  depth?: number;
  expandedItems: Record<string, boolean>;
  onToggle: (folderName: string) => void;
  onCloseMobile: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  depth = 0,
  expandedItems,
  onToggle,
  onCloseMobile
}) => {
  const isFolder = !!item.children && item.children.length > 0;
  const isExpanded = expandedItems[item.name];
  const paddingLeft = `${depth * 1.5 + 0.75}rem`;

  if (isFolder) {
    return (
      <div className="flex flex-col">
        <button
          onClick={() => onToggle(item.name)}
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
            {item.children!.map((child) => (
              <SidebarItem
                key={child.name}
                item={child}
                depth={depth + 1}
                expandedItems={expandedItems}
                onToggle={onToggle}
                onCloseMobile={onCloseMobile}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink
      to={item.path || '#'}
      onClick={() => {
        if (window.innerWidth < 1024) onCloseMobile();
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
};
