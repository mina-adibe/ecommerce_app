import * as types from "../../actions/actionTypes";
import initialState from "../initialState";
import {
  addItemToCart,
  removeItemFromCart,
  increaseItem,
  decreaseItem,
} from "./cartUtils";

//reducer
export default function cart(state = initialState.cartItems, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return addItemToCart(state, action.payload);

    case types.REMOVE_FROM_CART:
      debugger;

      return removeItemFromCart(state, action.payload);

    case types.INCREASE:
      return increaseItem(state, action.payload);

    case types.DECREASE:
      return decreaseItem(state, action.payload);

    case types.CLEAR_CART:
      return (state = []);

    default:
      return state;
  }
}
