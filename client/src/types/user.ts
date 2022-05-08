export type UserState = {
  user?: UserData;
};

export type UserData = {
  email: string;
  password: string;
};

export type User = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: Address;
};

export type UserAction =
  | { type: "SET_USER"; data: UserData }
  | { type: "SIGN_OUT" };

export type AccountPageProps = {
  user: User;
};

export type Address = {
  house_number: string;
  road_name: string;
  city: string;
  county: string;
  postcode: string;
};
