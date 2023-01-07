import { app } from '.'

export const createUser = async (data: { email: string; password: string; name: string }) => {
  return await app.service('users').create({ ...data })
}

export const getUsers = async () => {
  return await app.service('users').find()
}

export const getUserById = async (id: string) => {
  return await app.service('users').get(id)
}
