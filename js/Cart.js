import { addToCart } from "./addItemHandle";
import { categoryRender } from "./categoryRender";
import { categories, products } from "./data";
import { productRender } from "./productRender";
import { productRow } from "./selectors";

class Cart {
  initialRendering() {
    productRender(products);
    categoryRender(categories);
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
  }
}
export default Cart;
