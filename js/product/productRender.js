import { createProduct } from "./createProduct";
import { productRow } from "../main/selectors";
import { notFound } from "../functions/functions";
import { base_URL } from "../functions/data";

export const productRender = async (productsData) => {
  productRow.innerHTML = "";

  if (productsData.length === 0) {
    productRow.append(notFound());
  } else {
    productsData.forEach(({ id, title, image, description, price, rating }) => {
      productRow.append(
        createProduct(id, title, image, description, price, rating)
      );
    });
  }
  return productRow;
};
export const productRenderInitial = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  // products
  const resProduct = await fetch(`${base_URL}/products`, requestOptions);
  const productsData = await resProduct.json();
  productRender(productsData);
};
