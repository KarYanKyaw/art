import { createProduct } from "./createProduct";
import { productRow } from "../main/selectors";
import { notFound } from "../functions/functions";

export const productRender = (productsToRender) => {
  productRow.innerHTML = "";
  if (productsToRender.length === 0) {
    productRow.append(notFound());
  } else {
    productsToRender.forEach(
      ({ id, title, image, description, price, rating }) => {
        productRow.append(
          createProduct(id, title, image, description, price, rating)
        );
      }
    );
  }
  return productRow;
};
