import { cartData } from "./data";
import { counter } from "./functions";
import { cartItems } from "./selectors";

export const observeCart = () => {
  const observerOptions = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(() => {
    counter();
    localStorage.setItem("cart-data", JSON.stringify(cartData));
  });
  observer.observe(cartItems, observerOptions);
};
