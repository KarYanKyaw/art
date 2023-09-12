import { createProduct } from "./createProduct";
import { productRow } from "./selectors";

export const productRender = (productsToRender) => {
  productRow.innerHTML = "";
  productsToRender.forEach(
    ({ id, title, image, description, price, rating }) => {
      productRow.append(
        createProduct(id, title, image, description, price, rating)
      );
    }
  );
  return productRow;
};
