import * as types from "../../actions/actionTypes";
import initialState from "../initialState";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

//reducer
export default function cart(state = initialState.cartItems, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return addItemToCart(state, action.payload);

    default:
      return state;
  }
}
