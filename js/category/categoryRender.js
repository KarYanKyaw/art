import { categories } from "../functions/data";
import { categoryContainer } from "../main/selectors";
import { createCategory } from "./createCategory";

export const categoryRender = () => {
  categories.forEach((el) => {
    categoryContainer.append(createCategory(el));
  });
  categoryContainer.children[0].classList.add("active");
  return categoryContainer;
};
