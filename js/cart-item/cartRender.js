import { cartItems } from "../main/selectors";
import { createCartItem } from "./createCartItem";

export const cartItemRender = (itemsToRender) => {
  cartItems.innerHTML = "";
  itemsToRender.forEach(({ id, image, title, price, quantity }) => {
    cartItems.append(createCartItem(id, image, title, price, quantity));
  });
};
