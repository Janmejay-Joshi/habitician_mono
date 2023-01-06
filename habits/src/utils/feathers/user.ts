import { app } from '.';

export const createUser = async (data: {
  email: string;
  password: string;
  name: string;
}) => {
  return await app.service('users').create({ ...data, habits: [], groups: [] });
};
