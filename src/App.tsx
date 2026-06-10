import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // 1. Importamos TanStack Query
import { LoginPage } from './pages/LoginPage';
import { RecoverPasswordPage } from './pages/RecoverPasswordPage';

// 2. Creamos la instancia del cliente global
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    // 3. Envolvemos todo con el QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Ruta por defecto que redirige al login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Nuestras pantallas actuales */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recover-password" element={<RecoverPasswordPage />} />

          {/* Redirección para rutas inexistentes */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;