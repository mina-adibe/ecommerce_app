import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.GET_POSTS_RECIEVE:
      return action.payload;

    default:
      return state;
  }
}
