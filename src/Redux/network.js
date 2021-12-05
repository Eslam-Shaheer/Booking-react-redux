import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers["authentication"] = localStorage.getItem("authentication");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
