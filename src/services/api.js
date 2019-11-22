import axios from "axios"

const api = axios.create({
  baseURL: process.env.GATSBY_API_URL,
})

// api.interceptors.request.use(
//   function(config) {
//     return config
//   },
//   function(error) {
//     return Promise.reject(error)
//   }
// )

// api.interceptors.response.use(
//   function(response) {
//     return response
//   },
//   function(error) {
//     // Do something with response error
//     return Promise.reject(error)
//   }
// )

export default api
