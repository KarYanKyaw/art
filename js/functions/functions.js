import { cartData } from "./data";
import {
  cartCount,
  total,
  cartItems,
  myCart,
  searchForm,
  searchInput,
} from "../main/selectors";
import { productRender } from "../product/productRender";

// rate stars
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

// counter
const counter = () => {
  cartCount.forEach((el) => (el.innerText = cartData.length));
  return cartCount;
};

// total calc
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
    <button class="btn btn-outline-primary addBtn w-100 d-block">
      Add to cart <i class="bi pe-none bi-cart-plus"></i>
    </button>`;
};
export const activeBtn = () => {
  return ` 
      <button disabled class="btn btn-outline-primary active w-100 d-block">
      Added to cart <i class="bi pe-none bi-cart-check"></i>
      </button>`;
};

export const notFound = () => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerText =
    "No product is found! Use different keywords and try searching again!!!";
  p.classList.add("display-6", "fw-semibold", "text-center");
  div.append(p);
  console.log(div);
  return div;
};
// observer
export const observeCart = () => {
  const observerOptions = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(() => {
    counter();
    totalCostCalc();
    localStorage.setItem("cart-data", JSON.stringify(cartData));
    if (cartData.length == 0) {
      myCart.hide();
      [...document.querySelectorAll(".addBtn")].forEach((btn) => {
        btn.classList.remove("active"),
          (btn.innerHTML = `Add to cart <i class="bi pe-none bi-cart-plus"></i>`);
      });
    }
  });
  observer.observe(cartItems, observerOptions);
};
