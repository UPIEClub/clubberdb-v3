export const isBrowser = () => typeof window !== "undefined"

export const isAdmin = () =>
  isBrowser() && sessionStorage.getItem("isAdmin")
    ? sessionStorage.getItem("isAdmin") === "true"
    : false

export const getUser = () =>
  isBrowser() && sessionStorage.getItem("clubberDetails")
    ? JSON.parse(sessionStorage.getItem("clubberDetails"))
    : {}

export const isLoggedIn = () =>
  isBrowser() && sessionStorage.getItem("isAuthenticated")
    ? sessionStorage.getItem("isAuthenticated") === "true"
    : false

export const logOut = () => {
  if (isBrowser()) {
    sessionStorage.removeItem("isAuthenticated")
    sessionStorage.removeItem("clubberDetails")
    sessionStorage.removeItem("profileDetails")
    sessionStorage.removeItem("studentNumber")
    sessionStorage.removeItem("isAdmin")
    sessionStorage.removeItem("id")
  }
}
