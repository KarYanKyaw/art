export const products = [];
import { categoryRender } from "../category/categoryRender";
import { productRender } from "../product/productRender";

export const base_URL = "https://fakestoreapi.com";

export const dataFetching = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  // category
  const resCategories = await fetch(
    `${base_URL}/products/categories`,
    requestOptions
  );
  const categories = await resCategories.json();

  categoryRender(["All", ...categories]);

  // products
  const resProduct = await fetch(`${base_URL}/products`, requestOptions);
  const products = await resProduct.json();
  productRender(products);
};

export let cartData = [];

export const config = {
  min: 1,
  max: 7,
};
