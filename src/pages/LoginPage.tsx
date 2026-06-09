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
                    className="h-30 w-45 object-contain mb-12 self-start"
                />

                <h1 className="text-4xl font-bold text-[#014A24] mb-2">
                    Iniciar sesión
                </h1>
                <p className="text-gray-500 mb-8 text-sm">
                    ¿No tienes cuenta? <span className="font-medium text-[#014A24] cursor-pointer hover:underline">Ponte en contacto con el administrador.</span>
                </p>

                {/* formulario con logica */}
                <LoginForm />

            </div>
        </AuthLayout>
    );
}