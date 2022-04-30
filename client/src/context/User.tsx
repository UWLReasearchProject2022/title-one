import React, { createContext, useReducer } from "react";
import { userReducer } from "reducers";
import { UserState, UserAction } from "types";

type UserContextState = {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
};

const initialState: UserState = {};

export const UserContext = createContext<UserContextState>({
  state: initialState,
  dispatch: () => null,
});

type Props = {
  children: React.ReactNode;
};

export const UserProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
