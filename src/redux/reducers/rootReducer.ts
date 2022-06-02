import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import searchReducer from "./searchReducer";

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  searchInfo: searchReducer,
});
