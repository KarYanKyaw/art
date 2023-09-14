import { cartItemRender } from "../cart-item/cartRender";
import { categoryRender } from "../category/categoryRender";
import { categories, products } from "../functions/data";
import { observeCart } from "../functions/functions";
import { productRender } from "../product/productRender";
import { cartItems, orderBtn, productRow } from "../main/selectors";
import { addToCart } from "../product/addProductHandle";
import { cartControl } from "../cart-item/cartItemControl";
import { placeOrder } from "../order/order";

class Cart {
  observer() {
    observeCart();
  }
  initialRendering() {
    productRender(products);
    categoryRender(categories);
    localStorage.getItem("cart-data") &&
      cartItemRender(JSON.parse(localStorage.getItem("cart-data")));
  }

  listeners() {
    productRow.addEventListener("click", (e) => {
      addToCart(e);
    });
    cartItems.addEventListener("click", (e) => {
      cartControl(e);
    });
    orderBtn.addEventListener("click", () => {
      placeOrder();
    });
  }
  init() {
    console.log("Start");
    this.observer();
    this.initialRendering();
    this.listeners();
  }
}
export default Cart;
