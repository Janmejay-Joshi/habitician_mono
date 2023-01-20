import { app } from '.'

export const createHabit = async (data: {
  name: string
  description?: string
  color?: string
  type: boolean
  target: Number
  frequency?: Number
  unit: String
}) => {
  return await app.service('habits').create({
    ...data,
    data: [{ timestamp: new Date().valueOf(), value: 0 }]
  })
}

export const patchHabit = async () => {
  return
}

export const getHabit = async (UserID: string) => {
  return await app.service('habits').find()
}

export const getUserHabits = async () => {
  return
}
