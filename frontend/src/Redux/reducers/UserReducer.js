import { ActionTypes } from "../constants/action_types";
const initialState = null;
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, users: payload };

    default:
      return state;
  }
};
