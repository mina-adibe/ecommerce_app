import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return action.products;

    default:
      return state;
  }
}
