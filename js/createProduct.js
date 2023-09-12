export const createProduct = (id, title, image, description, price, rating) => {
  const product = document.createElement("div");
  product.className = "col-lg-4 col-10 col-md-6 mb-5";
  product.setAttribute("product-id", id);
  product.innerHTML = `
    <div class="product">
    <img
      class="product-img ms-3"
      src="${image}"
      alt=""
    />
    <div class="border border-2 p-3 user-select-none">
      <p class="fw-bold product-title text-truncate ">${title}</p>
      <p class="text-black-50  description">
      ${description}
      </p>
      <div class="rating d-flex justify-content-between">
        <div class="stars">
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </div>
        <div class="">( <span id="rate">${rating.rate}</span> / 5)</div>
      </div>
      <hr />
      <div class="price-add">
        <p class="fw-medium">$${price}</p>
        <button class="btn btn-outline-primary w-100 d-block">
          Add to cart <i class="bi bi-cart-plus"></i>
        </button>
      </div>
    </div>
  </div>
    `;
  return product;
};
