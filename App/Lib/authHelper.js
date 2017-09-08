export const isLoggedIn = (accessToken) =>
  accessToken && accessToken.expiredTime > (new Date()).getTime()
