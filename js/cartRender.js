import { createCartItem } from "./createCartItem";
import { counter } from "./functions";
import { cartItems } from "./selectors";

export const cartItemRender = (itemsToRender) => {
  cartItems.innerHTML = "";
  itemsToRender.forEach(({ id, image, title, price, quantity }) => {
    cartItems.append(createCartItem(id, image, title, price, quantity));
  });
};
