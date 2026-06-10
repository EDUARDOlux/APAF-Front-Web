import { z } from 'zod';

export const recoverPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'El correo electrónico es requerido' })
    .email({ message: 'Debe ser un correo electrónico válido' }),
});

export type RecoverPasswordFormValues = z.infer<typeof recoverPasswordSchema>;

export interface RecoverPasswordResponse {
  success: boolean;
  message: string;
}
