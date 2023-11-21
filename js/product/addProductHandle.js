import { cartItemRender } from "../cart-item/cartRender";
import { base_URL, cartData, config } from "../functions/data";
import { swalToast } from "../functions/swal";

export const addToCart = async (e) => {
  if (!e.target.classList.contains("addBtn")) return;
  if (e.target.classList.contains("alreadyAdded")) {
    swalToast.fire({
      icon: "warning",
      title: "Your item is already in cart!",
    });
  } else {
    const productCard = e.target.closest(".product");

    const id = productCard.getAttribute("product-id");

    const btn = document.querySelectorAll(".addBtn");
    const buttonsToDisable = [
      ...[...btn].filter(
        (el) =>
          !el.classList.contains(`${id}`) &&
          !el.classList.contains("alreadyAdded")
      ),
    ];

    buttonsToDisable.forEach((el) => (el.disabled = true));
    [...document.querySelectorAll(".alreadyAdded")].forEach((el) =>
      el.classList.add("opacity-75")
    );

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    e.target.classList.add("active");

    e.target.innerHTML = `Adding to cart <div class="spinner-border spinner-border-sm" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`;
    // fetch product data
    const res = await fetch(`${base_URL}/products/${id}`, requestOptions);
    const data = await res.json();
    const productData = {
      ...data,
      quantity: config.min,
    };
    // push data
    cartData.unshift(productData);

    swalToast.fire({
      icon: "success",
      title: "Item added to cart!",
    });

    cartItemRender(cartData);
    setTimeout(() => {
      buttonsToDisable.forEach((el) => (el.disabled = false));
      [...document.querySelectorAll(".alreadyAdded")].forEach((el) =>
        el.classList.remove("opacity-75")
      );
    }, 2000);

    return cartData;
  }
};
