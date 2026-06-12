import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RecoverPasswordPage } from '../pages/RecoverPasswordPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage';
import { ProtectedRoute } from '../components/guards/ProtectedRoute';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { UsersPage } from '../pages/UsersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/recover-password',
    element: <RecoverPasswordPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
  },
  {
    // Rutas Protegidas
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          // rutas privadas del sistema
          {
            index: true,
            element: <div className="p-8 text-gray-500">Seleccione un módulo del menú lateral</div>,
          },
          {
            path: 'usuarios',
            element: <UsersPage />,
          }
        ],
      }
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);
