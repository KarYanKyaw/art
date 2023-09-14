import { cartItemRender } from "../cart-item/cartRender";
import { cartData } from "../functions/data";
import { confirmModal, swalToast } from "../functions/swal";

export const placeOrder = () => {
  if (cartData.length == 0) {
    swalToast.fire({
      icon: "warning",
      title: "Please add items to your cart first!",
    });
  } else {
    confirmModal
      .fire({
        title: "Are you sure?",
        text: "Do you want to proceed ordering?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, order now!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const items = cartData.map((el) => ({
            title: el.title,
            quantity: el.quantity,
          }));
          const myOrder = {
            ...items,
            user_name: "Kar Yan Kyaw",
            user_id: "GGWP8834",
          };
          cartData.splice(0, cartData.length);
          cartItemRender(cartData);
          console.log(myOrder);
        }
        confirmModal.fire({
          title: "Ordered!",
          text: "Thank you for shopping with us!!!",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "Ok",
          reverseButtons: true,
        });
      });
  }
};
