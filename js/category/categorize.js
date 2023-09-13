import { products } from "../functions/data";
import { productRender } from "../product/productRender";

export const categorize = (categoryBtn) => {
  const category = categoryBtn.innerText.toLowerCase();
  document.querySelector(".category.active")?.classList.remove("active");
  categoryBtn.classList.add("active");
  productRender(
    products.filter((el) => category === "all" || el.category === category)
  );
};
