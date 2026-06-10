import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const MAX_ATTEMPTS = 5;
const LOCK_DURATION_MS = 3 * 60 * 1000;

export interface AuthLockState {
  failedAttempts: number;
  lockedUntil: number | null;
}

export interface AuthLockActions {
  recordFailedAttempt: () => void;
  resetLock: () => void;
  isLocked: () => boolean;
}

export type AuthLockStore = AuthLockState & AuthLockActions;

export const useAuthLockStore = create<AuthLockStore>()(
  persist(
    (set, get) => ({
      failedAttempts: 0,
      lockedUntil: null,

      recordFailedAttempt: () => {
        const { failedAttempts, lockedUntil } = get();

        // Si esta bloqueado
        if (lockedUntil && Date.now() < lockedUntil) return;

        const newAttempts = failedAttempts + 1;

        if (newAttempts >= MAX_ATTEMPTS) {
          set({
            failedAttempts: newAttempts,
            lockedUntil: Date.now() + LOCK_DURATION_MS,
          });
        } else {
          set({
            failedAttempts: newAttempts,
            lockedUntil: null,
          });
        }
      },

      resetLock: () => set({ failedAttempts: 0, lockedUntil: null }),

      isLocked: () => {
        const { lockedUntil } = get();
        if (!lockedUntil) return false;
        if (Date.now() < lockedUntil) return true;

        // Limpiar el estado del tiempo y retornar falso
        get().resetLock();
        return false;
      },
    }),
    {
      name: 'auth-lock-storage',
    }
  )
);
