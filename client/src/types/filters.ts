export type PriceRange = {
  min: number;
  max: number;
};

export type Platform = "PC" | "playstation" | "xbox" | "switch";

export type Filter = {
  active: boolean;
  platform: Platform[];
  price: PriceRange;
};
