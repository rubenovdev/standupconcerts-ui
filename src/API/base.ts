import { getCookie } from './../utils/cookie';
import axios from "axios"

export const base = axios.create({
    baseURL: process.env.REACT_APP_API || "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

base.interceptors.request.use(config => {
    const jwt = getCookie("jwt")
    if (jwt && config.headers) {
        config.headers.Authorization = "Bearer " + jwt
    }
    return config
})