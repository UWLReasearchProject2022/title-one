export type UserState = {
  user?: User;
};

export type User = { email: string; password: string };

export type UserAction = { type: "SET_USER"; data: User };
