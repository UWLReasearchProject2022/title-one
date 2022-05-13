import axios from "axios";
import { User } from "types";

export const getUser = async (email: string): Promise<User[]> => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/user?email=${email}`,
  );
  return response.status === 200 ? response.data : [];
};
