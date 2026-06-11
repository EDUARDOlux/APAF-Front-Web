import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export interface ProtectedRouteProps {

  // renderisacion en caso de accesos permitidos
  children?: React.ReactNode;

  //Permisos requeridos para acceder a la rutas
  allowedPermissions?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedPermissions,
}) => {
  //autenticación y verificación de permisos (ABAP) Temporal
  const isAuthenticated = true;
  const hasPermissions = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedPermissions && allowedPermissions.length > 0 && !hasPermissions) {
    // Redirecion de pginas no autorizadas
    return <Navigate to="/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
