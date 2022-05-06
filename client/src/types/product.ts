export type Product = {
  id: number;
  name: string;
  short_description: string;
  description: string;
  long_description: string;
  developer: "Ubisoft" | "Rockstar Games";
  price: number;
  image: string;
  platform: "PC" | "Playstation" | "Xbox" | "Switch";
  age_rating: "3+" | "7+" | "12+" | "16+" | "18+";
  release_date: string;
  rating: number;
  review_count: number;
};
