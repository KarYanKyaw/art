import { cartItemRender } from "../cart-item/cartRender";
import { base_URL, cartData, config } from "../functions/data";
import { swalToast } from "../functions/swal";
import { app, cartBtn } from "../main/selectors";

export const addToCart = async (e) => {
  if (!e.target.classList.contains("addBtn")) return;
  const productCard = e.target.closest(".product");
  e.target.classList.add("active");
  e.target.innerHTML = `Adding to cart <div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;

  const id = productCard.getAttribute("product-id");
  if (cartData.some((el) => el.id == id)) {
    swalToast.fire({
      icon: "warning",
      title: "Your item is already in cart!",
    });
  } else {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const res = await fetch(`${base_URL}/${id}`, requestOptions);
    const data = await res.json();
    const productData = {
      ...data,
      quantity: config.min,
    };

    cartData.unshift(productData);

    e.target.classList.add("active");
    e.target.innerHTML = `Added to cart <i class="bi pe-none bi-cart-check"></i>`;

    const currentProductImg = productCard.querySelector(".product-img");

    const tempImg = new Image();
    tempImg.src = currentProductImg.src;
    tempImg.height = currentProductImg.getBoundingClientRect().height;
    tempImg.style.position = "fixed";
    tempImg.style.top = currentProductImg.getBoundingClientRect().top + "px";
    tempImg.style.left = currentProductImg.getBoundingClientRect().left + "px";
    tempImg.style.zIndex = 2000;
    tempImg.style.transition = 700 + "ms";

    setTimeout(() => {
      tempImg.style.top =
        cartBtn.querySelector(".bi-cart").getBoundingClientRect().y + "px";
      tempImg.style.left =
        cartBtn.querySelector(".bi-cart").getBoundingClientRect().x + "px";
      tempImg.style.height = 10 + "px";
    }, 100);

    tempImg.addEventListener("transitionend", () => {
      tempImg.remove();
      cartBtn.classList.add("animate__tada");
      cartBtn.addEventListener("animationend", () => {
        cartBtn.classList.remove("animate__tada");
      });
    });
    swalToast.fire({
      icon: "success",
      title: "Item added to cart!",
    });
    app.prepend(tempImg);
    cartItemRender(cartData);
  }
  return cartData;
};
