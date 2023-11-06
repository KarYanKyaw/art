
import { categoryContainer } from "../main/selectors";
import { createCategory } from "./createCategory";

export const categoryRender = (dataToRender) => {
  categoryContainer.innerHTML = "";
  dataToRender.forEach((el) => {
    categoryContainer.append(createCategory(el));
  });
  categoryContainer.children[0].classList.add("active");
  return categoryContainer;
};
