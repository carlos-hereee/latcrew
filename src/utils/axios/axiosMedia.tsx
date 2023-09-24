import axios from "axios";

export const axiosMedia = axios.create({
  baseURL: import.meta.env.VITE_DB_BASE_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": import.meta.env.VITE_CLIENT_BASE_URL,
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
  },
});
