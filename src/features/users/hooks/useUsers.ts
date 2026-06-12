import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/getUsers';
import { type User } from '../types';

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};
