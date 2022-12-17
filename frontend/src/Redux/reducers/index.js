import { combineReducers } from "redux";

import { userReducer } from "./UserReducer";

const reducers = combineReducers({
  User: userReducer,
});

export default reducers;
