import { addToCart } from "./addItemHandle";
import { cartControl } from "./cartItemControl";
import { cartItemRender } from "./cartRender";
import { categoryRender } from "./categoryRender";
import { categories, products } from "./data";
import { observeCart } from "./observer";
import { productRender } from "./productRender";
import { cartItems, productRow } from "./selectors";

class Cart {
  storageRender() {
    localStorage.getItem("cart-data") &&
      cartItemRender(JSON.parse(localStorage.getItem("cart-data")));
  }
  observer() {
    observeCart();
  }
  initialRendering() {
    productRender(products);
    categoryRender(categories);
  }

  listeners() {
    productRow.addEventListener("click", (e) => {
      addToCart(e);
    });
    cartItems.addEventListener("click", (e) => {
      cartControl(e);
    });
  }
  init() {
    console.log("Start");
    this.initialRendering();
    this.observer();
    this.storageRender();
    this.listeners();
  }
}
export default Cart;
