import { cartItemRender } from "../cart-item/cartRender";
import { dataFetching } from "../functions/data";
import { clearInput, observeCart, search } from "../functions/functions";
import {
  cartItems,
  clearInputBtn,
  orderBtn,
  productRow,
  searchBtn,
  searchForm,
  searchInput,
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
    searchForm.addEventListener("submit", (e) => {
      search(e);
    });
    searchInput.addEventListener("keyup", (e) => {
      search(e);
    });
    clearInputBtn.addEventListener("click", (e) => {
      clearInput(e);
    });
    searchBtn.addEventListener("click", () => {
      searchInput.focus();
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
