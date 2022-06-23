import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import DataReducer from "./DataReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  DataReducer: DataReducer,
});

export default rootReducer;
