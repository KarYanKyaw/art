import { dataFetching } from "../functions/data";
import { observeCart } from "../functions/functions";
import {
  cartItems,
  orderBtn,
  productRow,
} from "../main/selectors";
import { addToCart } from "../product/addProductHandle";
import { cartControl } from "../cart-item/cartItemControl";
import { placeOrder } from "../order/order";
import { loadingProduct } from "../product/loadingProduct";

class Cart {
  observer() {
    observeCart();
  }
  initialRendering() {
    loadingProduct();
    dataFetching();
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
