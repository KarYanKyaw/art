import { categoryRender } from "../category/categoryRender";
import { productRender, productRenderInitial } from "../product/productRender";

export const base_URL = "https://fakestoreapi.com";

export const dataFetching = async () => {
  await categoryRender();
  await productRenderInitial();
};

export let cartData = [];

export const config = {
  min: 1,
  max: 7,
};
