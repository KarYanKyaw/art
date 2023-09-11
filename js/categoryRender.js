import { createCategory } from "./createCategory";
import { categories } from "./data";
import { categoryContainer } from "./selectors";

export const categoryRender = () => {
  categories.forEach((el) => {
    categoryContainer.append(createCategory(el));
  });
  categoryContainer.children[0].classList.add("active");
  return categoryContainer;
};
