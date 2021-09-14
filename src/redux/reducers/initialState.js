// eslint-disable-next-line import/no-anonymous-default-export
export default {
  products: [],
  cartItems: [],
  searchItems: [],
  lang: localStorage.getItem("lang")
    ? localStorage.getItem("lang") === "en"
      ? "en"
      : "ar"
    : "en",
};
