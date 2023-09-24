// import axios from "axios";
import { axiosAuth } from "./axiosAuth";

// const interceptors = axios.interceptors.response((a, (b) => console.log("a,b", a, b)));

// add request interceptor
const axiosWithAuth = axiosAuth.interceptors.request.use(
  (config) => {
    // do something before request is sent
    console.log("config", config);
    return config;
  },
  (err) => {
    // do somthing with request error
    //
    return Promise.reject(err);
  }
);
// add response interceptor
// const

export { axiosWithAuth };
