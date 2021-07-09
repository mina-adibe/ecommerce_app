import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

export default function searchReducer(
  state = initialState.searchItems,
  action
) {
  switch (action.type) {
    case types.FILTERED_ITEMS:
      return action.payload;

    default:
      return state;
  }
}
