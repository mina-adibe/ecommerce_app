import { combineReducers } from "redux";
import productsReducer from "./product/productsReducer";
import cartReducer from "./cart/cartReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  search: searchReducer,
});

export default rootReducer;
