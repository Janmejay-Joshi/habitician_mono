import { app } from '.'

export const createGroup = async (data: {
  name: string
  description?: string
  color: string
  members?: Array<string>
}) => {
  await app.service('groups').create({ ...data, members: [''] })
}

export const getGroups = async (UserID: string) => {
  return await app.service('groups').find()
}

export const getGroup = async (id: string) => {
  return await app.service('groups').get(id)
}
