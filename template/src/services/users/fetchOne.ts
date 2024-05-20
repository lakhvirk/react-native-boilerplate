import { instance } from '@/services/instance';
import { UserSchema } from '@/types/schemas/user';

export default async (id: number): Promise<UserSchema> => {
  const response = await instance.get(`users/${id}`).json();
  return response as UserSchema;
};
