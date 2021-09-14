import * as types from "./actionTypes.js";

export const setLang = (payload) => ({
  type: types.SET_LANG,
  payload: payload,
});
