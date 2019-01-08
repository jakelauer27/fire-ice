import { housesReducer } from "./getHouses";
import { combineReducers } from "redux";
import { isLoadingReducer } from "./isLoading";

export const rootReducer = combineReducers({
  houses: housesReducer,
  isLoading: isLoadingReducer
})