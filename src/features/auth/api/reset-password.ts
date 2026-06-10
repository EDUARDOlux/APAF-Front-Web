import type { ResetPasswordPayload, ResetPasswordResponse } from '../types/reset-password';

export const resetPassword = async (
  payload: ResetPasswordPayload
): Promise<ResetPasswordResponse> => {
  // Simulación de retraso de red (2 segundos)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Contraseña restablecida exitosamente.',
      });
    }, 2000);
  });
};
