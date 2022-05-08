import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { User } from "types";

export const useUpdateUser = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation(
    (user: User) =>
      axios.patch(`${process.env.REACT_APP_API_URL}/api/users/${id}`, user),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([]);
      },
    },
  );
};
