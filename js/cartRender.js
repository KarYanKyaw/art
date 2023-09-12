import { createCartItem } from "./createCartItem";
import { cartData } from "./data";
import { counter } from "./functions";
import { cartItems } from "./selectors";

export const cartItemRender = () => {
  cartItems.innerHTML = "";
  cartData.forEach(({ id, image, title, price, quantity }) => {
    cartItems.append(createCartItem(id, image, title, price, quantity));
  });
  counter();
};
