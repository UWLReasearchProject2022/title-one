import { AgeRating, Platform, Category } from "./filters";
import { Review } from "./review";
export type Product = {
  product_id: number;
  name: string;
  short_description: string;
  description: string;
  long_description: string;
  developer: "Ubisoft" | "Rockstar Games";
  category: Category;
  image_url: string;
  platform: Platform;
  age_rating: AgeRating;
  release_date: string;
  reviews: Review[];
  rating: number;
  review_count: number;
};

export type APIPlatform = {
  platform_id: number;
  name: Platform;
};

export type ProductPlatform = {
  product_platform_id: number;
  price: number;
  is_featured: boolean;
  platform: APIPlatform;
  product: Product;
  quantity: number;
};
