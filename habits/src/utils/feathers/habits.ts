import { app } from '.'

export const createHabit = async (data: {
  name: string
  description?: string
  color: string
  type: 'y/n' | 'measurable'
  target: Number
  frequency: Number
  special: string
  unit?: String
}) => {
  return await app.service('habits').create({ ...data })
}

export const patchHabit = async () => {
  return
}

export const getHabit = async () => {
  return
}

export const getUserHabits = async () => {
  return
}
