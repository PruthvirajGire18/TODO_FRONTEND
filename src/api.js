import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-backend-ivory-five.vercel.app", // ✅ your backend base URL
  withCredentials: true, // ✅ allow cookies/sessions if needed
});

export default api;
