import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HEADER_MAP } from './config/header';

export const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const headerData = HEADER_MAP[location.pathname] || HEADER_MAP['fallback'];

  // Perfil mockeado temporalmente.
  const userProfile = {
    name: 'Anita Cruz',
    email: 'anita@camwriz.com',
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        userProfile={userProfile}
      />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
        <Header
          data={headerData}
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
