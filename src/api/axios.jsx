import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URI;

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.response.use((response) => {
  console.log("Response headers:", response.headers);
  const token =
    response.headers["Authorization"] || response.headers["authorization"];
  if (token) {
    setAuthToken(token);
  }
  console.log("My token is: ", token)
  return response;
});

axiosPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("Your token is: ", token)
  return config;
});

const setAuthToken = (token) => {
  localStorage.setItem("token", token);
  console.log("Our token is: ", token)
};

export const removeAuthToken = () => {
  localStorage.removeItem("token");
};

export default axiosPrivate;
