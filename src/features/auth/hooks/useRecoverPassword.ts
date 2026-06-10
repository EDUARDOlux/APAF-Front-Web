import { useMutation } from '@tanstack/react-query';
import { recoverPassword } from '../api/recoverPassword';
import type { RecoverPasswordFormValues, RecoverPasswordResponse } from '../types/recover-password';

export const useRecoverPassword = () => {
  return useMutation<RecoverPasswordResponse, Error, RecoverPasswordFormValues>({
    mutationFn: (data) => recoverPassword(data),
  });
};
