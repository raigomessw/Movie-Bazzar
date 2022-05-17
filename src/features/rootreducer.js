import { combineReducers } from "redux";
import {reducer as filmListReducer } from "./filmList";
import { reducer as shoppingCartReducer } from "./shoppingCart"; 

const rootReducer = combineReducers({
  filmList: filmListReducer,
  shoppingCart : shoppingCartReducer

});

export { rootReducer };