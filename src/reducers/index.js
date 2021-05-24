import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import userReducer from "./user";

const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  user: userReducer,
});

export default allReducers;
