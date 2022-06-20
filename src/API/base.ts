import { getCookie } from './../utils/cookie';
import axios from "axios"

console.log(process.env)

export const base = axios.create({
    baseURL: process.env.API_BASE_URL || "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

base.interceptors.request.use(config => {
    const jwt = getCookie("jwt")
    console.log(jwt && config)
    if (jwt && config.headers) {
        config.headers.Authorization = "Bearer " + jwt
    }
    return config
})