import { cartData } from "./data";
import { cartCount } from "./selectors";

export const counter = () => {
  cartCount.innerText = cartData.length;
};
