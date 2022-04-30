import React, { createContext, useReducer, Dispatch } from "react";
import { userReducer } from "reducers";
import { User, UserReducerAction } from "types";

type UserContextState = {
  state: User;
  dispatch: React.Dispatch<UserReducerAction>;
};

const initialState: User = {
  loggedIn: false,
};

export const UserContext = createContext<UserContextState>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider: React.FunctionComponent = (children) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
