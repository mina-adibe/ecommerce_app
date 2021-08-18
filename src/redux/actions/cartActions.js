import * as types from "./actionTypes";

export function addToCart(cartItemToAdd) {
  return { type: types.ADD_TO_CART, payload: cartItemToAdd };
}

export function removeFromCart(cartItemToRemove) {
  return { type: types.REMOVE_FROM_CART, payload: cartItemToRemove };
}

export function increaseQuantity(item) {
  return { type: types.INCREASE, payload: item };
}

export function decreaseQuantity(item) {
  return { type: types.DECREASE, payload: item };
}

export function clearCart() {
  return { type: types.CLEAR_CART };
}

// export function getTotal() {
//   return { type: types.GET_TOTALS };
// }
