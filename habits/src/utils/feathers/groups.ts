import { app } from '.'

export const createGroup = async (data: { name: string; description?: string; members?: Array<string> }) => {
  await app.service('groups').create({ ...data, color: 'red', members: [''] })
}

export const getGroups = async (userID: string) => {
  return await app.service('groups').find()
}
