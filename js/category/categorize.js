import { base_URL } from "../functions/data";
import { loadingProduct } from "../product/loadingProduct";
import { productRender } from "../product/productRender";

export const categorize = (categoryBtn) => {
  const category = categoryBtn.innerText.toLowerCase();
  document.querySelector(".category.active")?.classList.remove("active");
  categoryBtn.classList.add("active");
  loadingProduct();
  if (category == "all") {
    fetch(`${base_URL}/products`)
      .then((res) => res.json())
      .then((products) => productRender(products));
  } else {
    fetch(`${base_URL}/products/category/${category}`)
      .then((res) => res.json())
      .then((products) => productRender(products));
  }
};
