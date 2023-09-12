import { categorize } from "./categorize";

export const createCategory = (category) => {
  const categoryBtn = document.createElement("li");
  categoryBtn.className =
    "border text-capitalize px-3 py-2 me-2 d-flex align-items-center text-center category";
  categoryBtn.innerText = category;
  categoryBtn.addEventListener("click", () => {
   categorize(categoryBtn)
  });
  return categoryBtn;
};
