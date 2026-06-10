import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { useAuthLockStore } from '../../../store/useAuthLockStore';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';

// Reglas
const loginSchema = z.object({
    email: z.string()
        .min(1, { message: "El correo es obligatorio" })
        .email({ message: "Formato de correo inválido" }),
    password: z.string()
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
    rememberMe: z.boolean().optional(),
});

// Tipo de datos
type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const recordFailedAttempt = useAuthLockStore((state) => state.recordFailedAttempt);

    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        }
    });

    // Funcion (Mock del Backend)
    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);

        // Simulacion
        console.log("Enviando datos al servidor falso...", data);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulancion bloqueo
        console.error("Simulando error de login para probar bloqueo...");
        recordFailedAttempt();

        setIsLoading(false);

        // Cuando la API real esté lista:
        // si es exitoso: redirigir
        // si falla: recordFailedAttempt()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

            {/* Correo */}
            <div>
                <Input
                    label="Correo electrónico"
                    type="email"
                    placeholder="example@gmail.com"
                    disabled={isLoading}
                    {...register('email')}
                />
                {errors.email && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
                )}
            </div>

            {/* Contraseña */}
            <div>
                <Input
                    label="Contraseña"
                    type="password"
                    placeholder="••••••••"
                    disabled={isLoading}
                    {...register('password')}
                />
                {errors.password && (
                    <span className="text-red-500 text-xs mt-1 block">{errors.password.message}</span>
                )}
            </div>

            {/* Recordarme y Olvidé contraseña */}
            <div className="flex items-center justify-between mt-2 mb-6">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        className="w-4 h-4 text-[#014A24] rounded border-gray-300 focus:ring-[#014A24]"
                        disabled={isLoading}
                        {...register('rememberMe')}
                    />
                    <label htmlFor="rememberMe" className="text-sm text-gray-700">
                        Acuérdate de mí
                    </label>
                </div>

                <Link to="/recover-password" className="text-sm font-medium text-gray-700 hover:text-[#014A24] underline transition-colors">
                    ¿Has olvidado tu contraseña?
                </Link>
            </div>

            {/* Boton  Submit */}
            <Button type="submit" disabled={isLoading} className="w-full bg-[#1A3626] hover:bg-[#1A3626]/90">
                {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </Button>

        </form>
    );
}