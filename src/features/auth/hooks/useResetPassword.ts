import { useMutation } from '@tanstack/react-query';
import { resetPassword } from '../api/reset-password';
import type { ResetPasswordPayload, ResetPasswordResponse } from '../types/reset-password';

export const useResetPassword = () => {
  return useMutation<ResetPasswordResponse, Error, ResetPasswordPayload>({
    mutationFn: (payload) => resetPassword(payload),
  });
};
