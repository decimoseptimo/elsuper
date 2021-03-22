const isBrowser = typeof window !== `undefined`

const getUser = () =>
  window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = (user) =>
  (window.localStorage.gatsbyUser = JSON.stringify(user))

export const login = ({ username, password }) => {
  if (!isBrowser) return false

  if (username === `demo` && password === `demo`) {
    // console.log(`Logged in!`)
    return setUser({
      name: `Juan`,
      fullName: `Juan Hernandez`,
      email: `juan@example.com`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = (callback) => {
  if (!isBrowser) return
  // console.log(`Logged out!`)
  setUser({})
  callback()
}
