import { axiosInstance } from "./axiosConfig";

export const getAllShopItemApi = () => {
  return axiosInstance.get(`/products`);
};
