import * as types from "./actionTypes";

export function addToCart(cartItemToAdd) {
  return { type: types.ADD_TO_CART, payload: cartItemToAdd };
}

export function removeFromCart(cartItemToRemove) {
  return { type: types.REMOVE_FROM_CART, payload: cartItemToRemove };
}
