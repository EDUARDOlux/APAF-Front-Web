import React from 'react';
import {
  Users,
  Briefcase,
  PieChart,
  Activity,
  Wallet
} from 'lucide-react';

export interface NavigationItem {
  name: string;
  path?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
  requiredPermission?: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
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
