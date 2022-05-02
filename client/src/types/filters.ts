export type PriceRange = {
  min: number;
  max: number;
};

export type Platform = "PC" | "Playstation" | "Xbox" | "Nintendo";

export type AgeRating = "3+" | "7+" | "12+" | "16+" | "18+";

export type Filter = {
  platform: Platform[];
  price: PriceRange;
  ageRating: AgeRating[];
};
