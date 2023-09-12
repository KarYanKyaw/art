export const rateStar = (rate) => {
  let result = "";
  for (let i = 0; i < 5; i++) {
    result +=
      i < rate
        ? `<i class="bi bi-star-fill"></i>`
        : `<i class="bi bi-star"></i>`;
  }
  return result;
};
