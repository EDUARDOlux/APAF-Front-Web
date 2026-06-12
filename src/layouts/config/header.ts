export interface HeaderData {
  classification?: string;
  title?: string;
  description?: string;
}

export const HEADER_MAP: Record<string, HeaderData> = {
  '/usuarios': {
    classification: 'ADMINISTRACIÓN',
    title: 'Gestión de Usuarios',
    description: 'Administración de accesos y permisos de los usuarios del sistema.',
  },
  '/cartera': {
    classification: 'MÓDULO DE NEGOCIO',
    title: 'Cartera',
    description: 'Visión general de la cartera.',
  },
  '/limite-riesgos': {
    classification: 'ANÁLISIS Y RIESGO',
    title: 'Límite de Riesgos',
  },
  '/analisis-sucursal': {
    classification: 'ANÁLISIS FINANCIERO',
    title: 'Análisis Sucursal',
  },
  '/analisis-cartera': {
    classification: 'ANÁLISIS FINANCIERO',
    title: 'Análisis Cartera',
  },
  '/seguimiento': {
    classification: 'MÓDULO DE NEGOCIO',
    title: 'Seguimiento',
  },
  '/cartera-eprc': {
    classification: 'MÓDULO DE NEGOCIO',
    title: 'Cartera EPRC',
  },
  'fallback': {
    title: 'Dashboard Federación',
    description: 'Seleccione un módulo del menú lateral',
  }
};
