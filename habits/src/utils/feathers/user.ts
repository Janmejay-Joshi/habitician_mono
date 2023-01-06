import { app } from '.'

export const createUser = async (data: { email: string; password: string; name: string }) => {
  console.log({ ...data, strategy: 'local', habits: [], groups: [] })

  return await app.service('users').create({ ...data, strategy: 'local' })
}
