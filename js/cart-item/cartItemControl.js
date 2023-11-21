import { cartItems } from "../main/selectors";
import { cartItemRender } from "./cartRender";
import { cartData, config } from "../functions/data";
import { confirmModal, swalToast } from "../functions/swal";

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
  confirmModal
    .fire({
      title: "Are you sure?",
      text: "Do you really want to remove from cart? :(",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        const selectedItem = cartItems.querySelector(`[item-id="${id}"]`);
        selectedItem.classList.add("animate__animated", "animate__hinge");
        selectedItem.addEventListener("animationend", () => {
          const selectedItemIndex = cartData.findIndex((el) => el.id == id);
          const addBtn = document
            .querySelector(`[product-id="${id}"]`)
            .querySelector(".btn");
          if (selectedItemIndex !== -1) {
            cartData.splice(selectedItemIndex, 1);
            selectedItem.remove();
            cartItemRender(cartData);
            addBtn.classList.remove("alreadyAdded");
            addBtn.classList.remove("active");
            addBtn.classList.add("addBtn");
            addBtn.innerHTML = `Add to cart <i class="bi pe-none bi-cart-plus"></i>`;
          }
          swalToast.fire("Deleted!", "Your item is removed.", "success");
          return addBtn;
        });
      }
    });
};
const quantityDecrement = (id) => {
  const cartItem = cartItems.querySelector(`[item-id="${id}"]`);
  const quantityEl = cartItem.querySelector(".quantity");
  const currentQuantity = parseInt(quantityEl.innerText);
  if (currentQuantity === config.min) {
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
  if (currentQuantity < config.max) {
    quantityEl.innerText = currentQuantity + 1;
    const selectedItem = cartData.find((el) => el.id == id);
    if (!selectedItem) return;
    selectedItem.quantity += 1;
  }
};
