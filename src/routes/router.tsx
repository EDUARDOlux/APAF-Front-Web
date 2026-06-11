import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RecoverPasswordPage } from '../pages/RecoverPasswordPage';
import { ResetPasswordPage } from '../pages/ResetPasswordPage';
import { ProtectedRoute } from '../components/guards/ProtectedRoute';

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
      // Aquí irán las futuras rutas privadas.
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);
