import { instance } from "./instance";

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log("config before request is sent", config);
    // config.headers["Content-Type"] = "application/json; charset=utf-8";
    return config;
  },
  (error) => {
    console.log("error occured with configuration is sent", error);
    // Do something with request error
  }
);
// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export const axiosAuth = instance;
