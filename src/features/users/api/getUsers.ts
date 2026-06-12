import { type User } from '../types';

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'Eduardo Castillo',
          email: 'eduardo@ejemplo.com',
          status: 'active',
          role: 'Administrador',
          createdAt: new Date().toISOString(),
          permissions: ['users.read', 'users.write', 'users.delete'],
        },
        {
          id: '2',
          name: 'María García',
          email: 'maria@ejemplo.com',
          status: 'active',
          role: 'Gerente',
          createdAt: new Date().toISOString(),
          permissions: ['users.read', 'reports.read'],
        },
        {
          id: '3',
          name: 'Juan Pérez',
          email: 'juan@ejemplo.com',
          status: 'inactive',
          role: 'Analista',
          createdAt: new Date().toISOString(),
          permissions: ['reports.read'],
        },
        {
          id: '4',
          name: 'Ana López',
          email: 'ana@ejemplo.com',
          status: 'active',
          role: 'Operador',
          createdAt: new Date().toISOString(),
          permissions: ['data.read'],
        },
        {
          id: '5',
          name: 'Carlos Ruiz',
          email: 'carlos@ejemplo.com',
          status: 'active',
          role: 'Supervisor',
          createdAt: new Date().toISOString(),
          permissions: ['users.read', 'data.read', 'data.write'],
        },
      ]);
    }, 1000);
  });
};
