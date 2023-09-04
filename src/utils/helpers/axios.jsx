import axios from "axios";

export const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_DB_BASE_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": import.meta.env.VITE_CLIENT_BASE_URL,
    "Content-Type": "application/json; charset=utf-8",
    "Accept": "application/json",
  },
});
