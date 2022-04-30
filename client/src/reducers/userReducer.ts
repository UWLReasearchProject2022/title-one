import { User, UserReducerAction } from "types";

export const userReducer = (state: User, action: UserReducerAction): User => {
  switch (action.type) {
    case "SET":
      return action.data ? action.data : state;
    default:
      return state;
  }
};
