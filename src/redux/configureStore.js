import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import logger from "redux-logger";
//saga
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./sagas";
// import reducers from "./reducers"

const saga = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(saga, logger, reduxImmutableStateInvariant())
  )
);
saga.run(watchSagas);
export default store;
