import { cartItemRender } from "../cart-item/cartRender";
import { cartData, products } from "../functions/data";

export const addToCart = (e) => {
  if (!e.target.classList.contains("btn")) return;
  const id = e.target.closest(".product").getAttribute("product-id");
  if (cartData.some((el) => el.id == id)) {
    window.alert("Added");
  } else {
    const productData = {
      ...products.find((el) => el.id == id),
      quantity: 4,
    };
    cartData.unshift(productData);
    e.target.classList.add("active");
    e.target.innerHTML = `Added to cart <i class="bi pe-none bi-cart-check"></i>`;
    cartItemRender(cartData);
  }
  return cartData;
};
