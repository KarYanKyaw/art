import { categoryRender } from "../category/categoryRender";
import { productRender } from "../product/productRender";

export const base_URL = "https://fakestoreapi.com";

export const dataFetching = async () => {
  await categoryRender();
  await productRender();
};

export let cartData = [];

export const config = {
  min: 1,
  max: 7,
};
