import { useState, useEffect } from 'react';
import { useAuthLockStore } from '../../../store/useAuthLockStore';

export const useLockoutTimer = () => {
  const lockedUntil = useAuthLockStore((state) => state.lockedUntil);
  const resetLock = useAuthLockStore((state) => state.resetLock);

  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (!lockedUntil) {
      setTimeLeft(0);
      return;
    }

    const calculateTimeLeft = () => {
      const remaining = lockedUntil - Date.now();
      if (remaining <= 0) {
        resetLock();
        return 0;
      }
      return remaining;
    };

    setTimeLeft(calculateTimeLeft());

    const intervalId = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [lockedUntil, resetLock]);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  const formattedTime = minutes > 0
    ? `${minutes} minuto${minutes > 1 ? 's' : ''}`
    : `${seconds} segundo${seconds !== 1 ? 's' : ''}`;

  return {
    isLocked: timeLeft > 0,
    formattedTime,
    minutes,
    seconds
  };
};
