import { base_URL } from "../functions/data";
import { categoryContainer } from "../main/selectors";
import { createCategory } from "./createCategory";

export const categoryRender = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  // category
  const resCategories = await fetch(
    `${base_URL}/products/categories`,
    requestOptions
  );
  const categoriesData = await resCategories.json();

  const dataToRender = ["All", ...categoriesData];
  categoryContainer.innerHTML = "";
  dataToRender.forEach((el) => {
    categoryContainer.append(createCategory(el));
  });
  categoryContainer.children[0].classList.add("active");
  return categoryContainer;
};
