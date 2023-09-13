import { cartItemRender } from "../cart-item/cartRender";
import { categoryRender } from "../category/categoryRender";
import { categories, products } from "../functions/data";
import { observeCart } from "../functions/functions";
import { productRender } from "../product/productRender";
import { cartItems, productRow } from "../main/selectors";
import { addToCart } from "../product/addProductHandle";
import { cartControl } from "../cart-item/cartItemControl";

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
      addToCart(e)
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
