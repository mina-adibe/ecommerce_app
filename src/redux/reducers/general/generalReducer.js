import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

export default (state = initialState.lang, action) => {
  switch (action.types) {
    case types.SET_LANG:
      return action.payload;

    default:
      return state;
  }
};
