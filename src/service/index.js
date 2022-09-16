import { getData } from "../http/http";

export const getProducts = async () => {
  const data = await getData();
  return data.products;
};
