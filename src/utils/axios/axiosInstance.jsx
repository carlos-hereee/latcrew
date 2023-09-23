import axios from "axios";
import { clientUrl, serverUrl } from "../../config";

export const instance = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": clientUrl,
    "Content-Type": "application/json; charset=utf-8",
    "Accept": "application/json",
  },
});
// export const axiosAuth
