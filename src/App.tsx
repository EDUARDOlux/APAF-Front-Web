import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // 1. Importamos TanStack Query
import { LoginPage } from './pages/LoginPage';
import { RecoverPasswordPage } from './pages/RecoverPasswordPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';

// Instancia del cliente global
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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Ruta por defecto*/}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* pantallas actuales */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recover-password" element={<RecoverPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Redirección*/}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;