export type UserState = {
  user?: UserData;
};

export type UserData = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
};

export type UserAction = { type: "SET_USER"; data: UserData };
