import { app } from '.'

export const login = async (credentials?: { email: string; password: string }) => {
  try {
    if (!credentials) {
      await app.reAuthenticate()
    } else {
      await app.authenticate({
        strategy: 'local',
        ...credentials
      })
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export const logout = async () => {
  await app.logout()
}

export const getUser = async () => {
  const data = await app.get('authentication')
  return data.user
}
