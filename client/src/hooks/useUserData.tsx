import { useContext } from "react";
import { UserContext } from "context";
import { useUser } from "queries";

export const useUserData = () => {
  const { state, dispatch } = useContext(UserContext);

  const user = useUser(state.user?.email, state.user?.password);

  return { ...user, userData: state, dispatchUserData: dispatch };
};
