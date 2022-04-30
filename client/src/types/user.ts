export type User = {
  loggedIn: boolean;
  data?: UserData;
};

export type UserData = {};

export enum UserReducerOptions {
  SET = "SET",
}

export type UserReducerAction = { type: UserReducerOptions; data: User };
