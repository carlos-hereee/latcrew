import axios from "axios";

export let accessToken = localStorage.getItem("access-token");

export const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_DB_BASE_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": import.meta.env.VITE_CLIENT_BASE_URL,
    "Content-Type": "application/json; charset=utf-8",
    "Accept": "application/json",
  },
});
export const axiosWithOutAuth = axios.create({
  baseURL: import.meta.env.VITE_DB_BASE_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": import.meta.env.VITE_CLIENT_BASE_URL,
    "Content-Type": "application/json;charset=UTF-8",
    "Accept": "application/json",
  },
});

// // response interceptors =================================================
// let isRefreshing = false;
// let refreshSubscribers = [];
// function subscribeTokenRefresh(cb) {
//   refreshSubscribers.push(cb);
// }

// function onRrefreshed(accessToken) {
//   refreshSubscribers.map((cb) => cb(accessToken));
// }

// axiosAuth.interceptors.request.use(
//   async (config) => {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   async (err) => {
//     console.log("err", err);
//     const { config, response } = err;
//     const ogReq = config;
//     if (response.status === 401) {
//       if (!isRefreshing) {
//         isRefreshing = true;
//         const { data } = await axiosAuth.post("/users/refresh-token");
//         onRrefreshed(data.accessToken);
//         isRefreshing = false;
//       }
//       // eslint-disable-next-line no-unused-vars
//       const retryOrigReq = new Promise((resolve, _reject) => {
//         subscribeTokenRefresh((access) => {
//           // replace the expired accessToken and retry
//           ogReq.headers["Authorization"] = "Bearer " + access;
//           resolve(axios(ogReq));
//         });
//       });
//       return retryOrigReq;
//     } else {
//       return Promise.reject(err);
//     }
//   }
// );
