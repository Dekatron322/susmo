// utils/apiClient.ts
import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://api.smarthavensystems.com/",
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiClient
