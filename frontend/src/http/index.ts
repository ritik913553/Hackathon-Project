import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export const signup = (data:any)=>api.post('/api/v1/auth/register',data);
export const login = (data:any)=>api.post('/api/v1/auth/login',data);

export default api;