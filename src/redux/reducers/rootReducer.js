import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";
import { backetReducer } from "./backetReducer";

export const rootReducer = combineReducers({
  shop: shopReducer,
  backet: backetReducer,
});
