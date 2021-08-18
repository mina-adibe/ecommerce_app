import { all } from "redux-saga/effects";
import { getPostsSaga } from "./posts";

export function* watchSagas() {
  yield all([getPostsSaga()]);
}
