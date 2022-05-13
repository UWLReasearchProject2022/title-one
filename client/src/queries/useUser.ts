import { useQuery } from "react-query";
import { User } from "types";

export const useUser = (email?: string, password?: string) => {
  const { data, isLoading, error } = useQuery<User[], Error>(
    `user_${email}`,
    () =>
      fetch(
        `${process.env.REACT_APP_API_URL}/user?email=${email}&password=${password}`,
      ).then((res) => res.json()),
    { enabled: !(email === undefined && password === undefined) },
  );
  return {
    user: data ? data[0] : undefined,
    isLoading,
    error,
  };
};
