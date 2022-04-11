export type Product = {
  id: number;
  name: string;
  description: string;
  short_description: string;
  developer: string;
  price: number;
  image: string;
  platform: "PC" | "playstation" | "xbox" | "switch";
  age_rating: "3+" | "7+" | "12+" | "16+" | "18+";
  release_date: string;
  rating: number;
};
