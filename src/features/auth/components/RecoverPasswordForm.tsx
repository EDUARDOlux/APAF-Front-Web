import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { recoverPasswordSchema, type RecoverPasswordFormValues } from '../types/recover-password';
import { useRecoverPassword } from '../hooks/useRecoverPassword';

export function RecoverPasswordForm() {
  //Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPasswordFormValues>({
    resolver: zodResolver(recoverPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const { mutate, isPending, isSuccess, data } = useRecoverPassword();

  // Función (Mock del Backend)
  const onSubmit = (values: RecoverPasswordFormValues) => {
    mutate(values);
  };

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-4xl font-bold text-[#014A24] mb-2">
        Recuperar Contraseña
      </h1>
      <p className="text-gray-500 mb-8 text-sm">
        Ingresa tu correo electrónico
      </p>

      {isSuccess ? (
        <div className="bg-[#D5E1DE] border-[#D5E1DE] text-[#014A24] px-4 py-3 rounded-[10px] mb-6">
          <p className="text-sm font-medium">{data?.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full mb-4">
          <Input
            label="Correo electrónico"
            placeholder="example@gmail.com"
            type="email"
            error={errors.email?.message}
            {...register('email')}
          />

          <Button type="submit" disabled={isPending} className="mt-4">
            {isPending ? 'Enviando...' : 'Enviar Código'}
          </Button>
        </form>
      )}

      <Link
        to="/login"
        className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={16} />
        Volver al inicio de sesión
      </Link>
    </div>
  );
}
