import { axiosInstance } from "./index";
export const getPosts = async () => {
  return await axiosInstance.get("/products", { handlerEnabled: true });
};
