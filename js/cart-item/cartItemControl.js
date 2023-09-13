import { cartItems } from "../main/selectors";
import { cartItemRender } from "./cartRender";
import { cartData } from "../functions/data";


export const cartControl = (e) => {
  const id = e.target.closest(".cart-item").getAttribute("item-id");
  if (e.target.classList.contains("bi-trash3")) {
    removeFunction(id);
  } else if (e.target.classList.contains("quantityDecrement")) {
    quantityDecrement(id);
  } else if (e.target.classList.contains("quantityIncrement")) {
    quantityIncrement(id);
  }
};

const removeFunction = (id) => {
  if (confirm("U sure?")) {
    const selectedItemIndex = cartData.findIndex((el) => el.id == id);
    const btn = document
      .querySelector(`[product-id="${id}"]`)
      .querySelector(".btn");
    if (selectedItemIndex !== -1) {
      cartData.splice(selectedItemIndex, 1);
      cartItemRender(cartData);
      btn.classList.remove("active");
      btn.innerHTML = `Add to cart <i class="bi pe-none bi-cart-plus"></i>`;
    }
    return btn;
  }
};
const quantityDecrement = (id) => {
  const cartItem = cartItems.querySelector(`[item-id="${id}"]`);
  const quantityEl = cartItem.querySelector(".quantity");
  const currentQuantity = parseInt(quantityEl.innerText);
  if (currentQuantity === 1) {
    removeFunction(id);
  } else {
    quantityEl.innerText = currentQuantity - 1;
    const selectedItem = cartData.find((el) => el.id == id);
    if (!selectedItem) return;
    selectedItem.quantity -= 1;
  }
};
const quantityIncrement = (id) => {
  const cartItem = cartItems.querySelector(`[item-id="${id}"]`);
  const quantityEl = cartItem.querySelector(".quantity");
  const currentQuantity = parseInt(quantityEl.innerText);
  quantityEl.innerText = currentQuantity + 1;
  const selectedItem = cartData.find((el) => el.id == id);
  if (!selectedItem) return;
  selectedItem.quantity += 1;
};
