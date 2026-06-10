import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { resetPasswordSchema, type ResetPasswordFormValues } from '../types/reset-password';
import { useResetPassword } from '../hooks/useResetPassword';

interface ResetPasswordFormProps {
  token: string;
}

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ token }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const resetPasswordMutation = useResetPassword();

  const onSubmit = (data: ResetPasswordFormValues) => {
    resetPasswordMutation.mutate({
      token,
      password: data.password,
    });
  };

  useEffect(() => {
    if (resetPasswordMutation.isSuccess) {
      reset(); // Limpia el formulario en caso de éxito
    }
  }, [resetPasswordMutation.isSuccess, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {resetPasswordMutation.isError && (
        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm mb-4">
          Ocurrió un error al intentar restablecer la contraseña.
        </div>
      )}

      {resetPasswordMutation.isSuccess && (
        <div className="p-3 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm mb-4 font-medium text-center">
          Tu contraseña ha sido restablecida exitosamente. Ya puedes iniciar sesión.
        </div>
      )}

      <Input
        label="Nueva contraseña"
        type="password"
        placeholder="Ingresa tu nueva contraseña"
        error={errors.password?.message}
        {...register('password')}
      />

      <Input
        label="Confirmar contraseña"
        type="password"
        placeholder="Confirma tu nueva contraseña"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      <Button
        type="submit"
        disabled={resetPasswordMutation.isPending}
        className="mt-6"
      >
        {resetPasswordMutation.isPending ? 'Restableciendo...' : 'Restablecer contraseña'}
      </Button>
    </form>
  );
};
