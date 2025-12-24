import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ your backend base URL
  withCredentials: true, // ✅ allow cookies/sessions if needed
});

export default api;
