import { combineReducers } from "redux";
import {reducer as filmListReducer } from "./filmList"

const rootReducer = combineReducers({
  filmList: filmListReducer

});

export { rootReducer };