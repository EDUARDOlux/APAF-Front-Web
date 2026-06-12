import React from 'react';
import { useUsers } from '../hooks/useUsers';

export const UserTable: React.FC = () => {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isLoading) {
    return <div className="p-4 text-gray-500">Cargando usuarios...</div>;
  }

  if (isError) {
    return <div className="p-4 text-red-500">Error al cargar: {error.message}</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 overflow-x-auto">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Datos Crudos </h3>
      <pre className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  );
};
