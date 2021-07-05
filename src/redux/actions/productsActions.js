import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS, products: products };
}

export function loadProducts() {
  return function (dispatch) {
    return productApi
      .getProducts()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
}
