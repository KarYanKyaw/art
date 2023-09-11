import { categoryRender } from "./categoryRender";
import { categories, products } from "./data";
import { productRender } from "./productRender";

class Cart {
  init() {
    console.log("Start");
    productRender(products);
    categoryRender(categories)
  }
}
export default Cart;
