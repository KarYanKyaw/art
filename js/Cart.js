import { categoryRender } from "./categoryRender";
import { categories, products } from "./data";
import { productRender } from "./productRender";
import { categoryBtn } from "./selectors";

class Cart {
  initialRendering() {
    productRender(products);
    categoryRender(categories);
  }
  listeners() {

  }
  init() {
    console.log("Start");
    this.initialRendering();
    this.listeners();
  }
}
export default Cart;
