import { ActionTypes } from "../constants/action_types";

export const setUser = (users) => {
  return {
    type: ActionTypes.SET_USER,
    payload: users,
  };
};

export const removeUser = (user) => {
  return {
    type: ActionTypes.REMOVE_SET_USER,
    payload: user,
  };
};
