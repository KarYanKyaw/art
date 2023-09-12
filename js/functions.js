import { cartData } from "./data";
import { cartCount, total } from "./selectors";

export const counter = () => {
  cartCount.forEach((el) => (el.innerText = cartData.length));
  return cartCount;
};

export const totalCostCalc = () => {
  let totalCost = 0;
  cartData.forEach((el) => {
    totalCost += el.price * el.quantity;
  });
  total.innerText = `$${totalCost.toFixed(2)}`;
  return total;
};
