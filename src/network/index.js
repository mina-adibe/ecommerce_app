import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./interceptor";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: { "Content-Type": "application/json" },
});

//Handle request process
axiosInstance.interceptors.request.use((request) => {
  return requestHandler(request);
});

//Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
