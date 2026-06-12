import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

export const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Mapeo temporal de rutas a títulos para el Header
  const getSectionTitle = (path: string) => {
    switch (path) {
      case '/usuarios': return 'Gestión de Usuarios';
      case '/cartera': return 'Cartera';
      case '/limite-riesgos': return 'Límite de Riesgos';
      case '/analisis-sucursal': return 'Análisis Sucursal';
      case '/analisis-cartera': return 'Análisis Cartera';
      case '/seguimiento': return 'Seguimiento';
      case '/cartera-eprc': return 'Cartera EPRC';
      default: return 'Dashboard';
    }
  };

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
          currentSectionTitle={getSectionTitle(location.pathname)}
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
