import { AuthLayout } from '../layouts/AuthLayout';
import { LoginForm } from '../features/auth/components/LoginForm';

export function LoginPage() {
    return (
        <AuthLayout>
            <div className="w-full flex flex-col">
                {/* Logo */}
                <img
                    src="/src/assets/logoFederacion.png"
                    alt="Federación Centro Sur"
                    className="h-12 w-auto object-contain mb-12 self-start"
                />

                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Iniciar sesión
                </h1>
                <p className="text-gray-500 mb-8 text-sm">
                    ¿No tienes cuenta? <span className="font-medium text-gray-700 cursor-pointer hover:underline">Ponte en contacto con el administrador.</span>
                </p>

                {/* Inyectamos nuestro formulario con lógica */}
                <LoginForm />

            </div>
        </AuthLayout>
    );
}