import * as types from "./actionTypes";

export function productSearch(items) {
  return function (dispatch, getState) {
    const productItems = getState().products.slice();
    const searchResult = productItems.filter((item) =>
      item.title.toLowerCase().includes(items.toLowerCase())
    );
    return dispatch({ type: types.FILTERED_ITEMS, payload: searchResult });
  };
}
