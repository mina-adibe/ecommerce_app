import { combineReducers } from "redux";
import productsReducer from "./product/productsReducer";
import cartReducer from "./cart/cartReducer";
import searchReducer from "./search/searchReducer";
import generalReducer from "./general/generalReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  search: searchReducer,
  lang: generalReducer,
});

export default rootReducer;
