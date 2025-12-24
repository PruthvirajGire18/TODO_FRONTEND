import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-backend-ivory-five.vercel.app/api", // ✅ your backend base URL
  withCredentials: true, // ✅ allow cookies/sessions if needed
});
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


export default api;
