import axios from 'axios'
import { API_TIMEOUT_MS } from '../utils/constants'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT_MS,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || 'Something went wrong'
    return Promise.reject(new Error(message))
  },
)

export default axiosInstance
