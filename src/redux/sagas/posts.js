import { call, put, takeLatest } from "redux-saga/effects";
import * as API from "../../network/apis";
import { GET_POSTS_REQUEST } from "../actions/actionTypes";
import * as ACTIONS from "../actions/productsActions";

export function* getPostsRequest({ payload }) {
  try {
    const response = yield call(API.getPosts, payload);
    console.log(response);
    yield put(ACTIONS.postsReceive(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* getPostsSaga() {
  yield takeLatest(GET_POSTS_REQUEST, getPostsRequest);
}
