export const createCartItem = (id, image, title, price, quantity) => {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item", "mb-3");
  cartItem.setAttribute("product-id", id);
  cartItem.innerHTML = `
  <img
  class="cart-img ms-3"
  src="${image}"
/>
<div class="cart-item-content p-3 border border-2">
  <div
    class="d-flex align-items-center overflow-hidden d-flex justify-content-between"
  >
    <p class="fw-medium cart-title fs-5 text-truncate">
    ${title}
    </p>
    <div class="text-end me-3 delBtn">
      <i class="bi bi-trash3 text-danger"></i>
    </div>
  </div>
  <div class="cart-controls d-flex justify-content-between">
    <p class="mb-0 text-black-50">$${price}</p>
    <div
      class="quantity-control align-items-center d-flex justify-content-between"
    >
      <i class="bi bi-dash-circle quantityDecrement me-1"></i>
      <p class="mb-0 user-select-none quantity">${quantity}</p>
      <i class="bi bi-plus-circle quantityIncrement ms-1"></i>
    </div>
  </div>
</div>
  `;
  return cartItem;
};
