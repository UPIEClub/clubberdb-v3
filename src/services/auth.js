export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && sessionStorage.getItem("clubberDetails")
    ? JSON.parse(sessionStorage.getItem("clubberDetails"))
    : {}

export const isLoggedIn = () =>
  isBrowser() && sessionStorage.getItem("isAuthenticated")
    ? sessionStorage.getItem("isAuthenticated") === "true"
    : false
