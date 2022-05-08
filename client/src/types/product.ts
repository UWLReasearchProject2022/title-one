import { AgeRating, Platform, Category } from "./filters";

export type Product = {
  id: number;
  name: string;
  short_description: string;
  description: string;
  long_description: string;
  developer: "Ubisoft" | "Rockstar Games";
  category: Category;
  price: number;
  image: string;
  platform: Platform;
  age_rating: AgeRating;
  release_date: string;
  rating: number;
  review_count: number;
};
