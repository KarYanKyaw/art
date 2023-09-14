import { cartData } from "../functions/data";
import { rateStar,activeBtn, normalBtn } from "../functions/functions";

export const createProduct = (id, title, image, description, price, rating) => {
  const product = document.createElement("div");
  product.className = "col-lg-4 col-10 col-md-6 mb-5";
  const isExisted = cartData.find((el) => el.id == id);
  product.innerHTML = `
    <div class="product" product-id="${id}">
    <img
      class="product-img ms-3"
      src="${image}"
      alt=""
    />
    <div class="border border-2 p-3 user-select-none">
      <p class="fw-bold product-title text-truncate ">${title}</p>
      <p class="text-black-50 description">
      ${description}
      </p>
      <div class="rating d-flex justify-content-between">
        <div class="stars">
        ${rateStar(rating.rate.toFixed(0))}
        </div>
        <div class="">( <span id="rate">${rating.rate}</span> / 5)</div>
      </div>
      <hr />
      <div class="price-add">
        <p class="fw-medium">$${price}</p>
        ${isExisted ? activeBtn() : normalBtn()}
      </div>
    </div>
  </div>
    `;
  return product;
};
