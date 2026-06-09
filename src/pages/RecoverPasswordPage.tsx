import { AuthLayout } from '../layouts/AuthLayout';
import { RecoverPasswordForm } from '../features/auth/components/RecoverPasswordForm';

export function RecoverPasswordPage() {
    return (
        <AuthLayout>
            <div className="w-full flex flex-col">
                {/* Logo */}
                <img
                    src="/src/assets/logoFederacion.png"
                    alt="Federación Centro Sur"
                    className="h-30 w-45 object-contain mb-12 self-start"
                />

                {/* Formulario */}
                <RecoverPasswordForm />
            </div>
        </AuthLayout>
    );
}
