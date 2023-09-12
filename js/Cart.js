import { addToCart } from "./addItemHandle";
import { cartItemRender } from "./cartRender";
import { categoryRender } from "./categoryRender";
import { categories, products } from "./data";
import { observeCart } from "./observer";
import { productRender } from "./productRender";
import { productRow } from "./selectors";

class Cart {
  observer() {
    observeCart();
  }
  initialRendering() {
    productRender(products);
    categoryRender(categories);
    cartItemRender();
  }
  listeners() {
    productRow.addEventListener("click", (e) => {
      addToCart(e);
    });
  }
  init() {
    console.log("Start");
    this.initialRendering();
    this.listeners();
    this.observer();
  }
}
export default Cart;
