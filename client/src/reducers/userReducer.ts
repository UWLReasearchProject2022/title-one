import { UserState, UserAction } from "types";

export const userReducer = (
  state: UserState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.data };
    case "SIGN_OUT":
      return { ...state, user: undefined };
    default:
      return state;
  }
};
