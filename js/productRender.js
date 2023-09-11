import { createProduct } from "./createProduct";
import { products } from "./data";
import { productRow } from "./selectors";

export const productRender = (productsToRender) => {
  productsToRender.forEach(({ id, title, image, description,price ,rating}) => {
    productRow.append(createProduct( id, title, image, description,price,rating))
  });
  return productRow
};
