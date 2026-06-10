import type { RecoverPasswordFormValues, RecoverPasswordResponse } from '../types/recover-password';

export const recoverPassword = async (
  data: RecoverPasswordFormValues
): Promise<RecoverPasswordResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Si el correo existe, se han enviado las instrucciones.',
      });
    }, 2000);
  });
};
