import { useSearchParams, Navigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { ResetPasswordForm } from '../features/auth/components/ResetPasswordForm';

export function ResetPasswordPage() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    // validacion
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <AuthLayout>
            <div className="w-full flex flex-col">
                {/* Logo */}
                <img
                    src="/src/assets/logoFederacion.png"
                    alt="Federación Centro Sur"
                    className="h-30 w-45 object-contain mb-12 self-start"
                />

                <h1 className="text-4xl font-bold text-[#014A24] mb-2">
                    Restablecer contraseña
                </h1>
                <p className="text-gray-500 mb-8 text-sm">
                    Ingresa tu nueva contraseña para recuperar el acceso a tu cuenta.
                </p>

                {/* Formulario con lógica de dominio */}
                <ResetPasswordForm token={token} />
            </div>
        </AuthLayout>
    );
}
