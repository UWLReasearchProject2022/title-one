export type PriceRange = {
  min: number;
  max: number;
};

export type Platform = "Playstation" | "Xbox" | "Nintendo" | "PC";

export type AgeRating = "3+" | "7+" | "12+" | "16+" | "18+";

export type Category =
  | "Shooter"
  | "Racing"
  | "Role-playing (RPG)"
  | "Simulator"
  | "Platform"
  | "Real Time Strategy (RTS)"
  | "Puzzle"
  | "Fighting";

export type Filter = {
  platform: Platform[];
  price: PriceRange;
  ageRating: AgeRating[];
  category: Category[];
};
