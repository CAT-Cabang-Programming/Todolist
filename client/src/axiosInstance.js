
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", 
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor untuk response (cek token expired)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // kalau token invalid atau expired
      localStorage.removeItem("token");
      window.location.replace = "/login"; // auto logout
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
