import { useContext } from "react";
import { UserContext } from "context";

export const useUser = () => {
  const { state, dispatch } = useContext(UserContext);

  return {
    user: state,
    dispatchUser: dispatch,
  };
};
