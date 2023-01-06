import { app } from '.'

export const createGroup = async (data: {
  name: string
  description?: string
  color: string
  members?: Array<string>
}) => {
  await app.service('groups').create({ ...data, members: [''] })
}

export const getGroups = async (userID: string) => {
  return await app.service('groups').find()
}
