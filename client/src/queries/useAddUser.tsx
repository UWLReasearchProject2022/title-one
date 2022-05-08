import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { User } from "types";

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (user: User) =>
      axios.post(`${process.env.REACT_APP_API_URL}/api/users`, user),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([]);
      },
    },
  );
};
