import { combineReducers } from "redux";
import deviceReducer from "./deviceReducer";
import userReducer from "./userReducer";

export default combineReducers({
  devicesInfo: deviceReducer,
  usersInfo: userReducer
});
