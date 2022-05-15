import { User } from "./user";

export type Ratings = {
  game_play: number;
  social: number;
  graphics: number;
  value: number;
  overall: number;
};

export type Review = {
  review_id: number;
  product_id: number;
  user: User;
  date_reviewed: string;
  ratings: Ratings;
  comments: {
    positive: string;
    negative: string;
  };
};
