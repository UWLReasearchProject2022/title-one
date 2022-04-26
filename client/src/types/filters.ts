export type PriceRange = {
  min: number;
  max: number;
};

export type Platform = "PC" | "Playstation" | "Xbox" | "Nintendo";

export type Filter = {
  platform: Platform[];
  price: PriceRange;
};
