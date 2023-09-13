import { cartData } from "./data";
import { cartCount, total, cartItems } from "../main/selectors";

export const rateStar = (rate) => {
  let result = "";
  for (let i = 0; i < 5; i++) {
    result +=
      i < rate
        ? `<i class="bi bi-star-fill"></i>`
        : `<i class="bi bi-star"></i>`;
  }
  return result;
};

const counter = () => {
  cartCount.forEach((el) => (el.innerText = cartData.length));
  return cartCount;
};

const totalCostCalc = () => {
  let totalCost = 0;
  cartData.forEach((el) => {
    totalCost += el.price * el.quantity;
  });
  total.innerText = `$${totalCost.toFixed(2)}`;
  return total;
};

// btn states
export const normalBtn = () => {
  return ` 
    <button class="btn btn-outline-primary w-100 d-block">
      Add to cart <i class="bi pe-none bi-cart-plus"></i>
    </button>`;
};
export const activeBtn = () => {
  return ` 
      <button class="btn btn-outline-primary active w-100 d-block">
      Added to cart <i class="bi pe-none bi-cart-check"></i>
      </button>`;
};

export const observeCart = () => {
  const observerOptions = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(() => {
    counter();
    totalCostCalc();
    localStorage.setItem("cart-data", JSON.stringify(cartData));
  });
  observer.observe(cartItems, observerOptions);
};
