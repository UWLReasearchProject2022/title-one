export type Ratings = {
  gameplay: number;
  social: number;
  graphics: number;
  value: number;
  overall: number;
};

export type Review = {
  id: number;
  product_id: number;
  name: string;
  date: string;
  ratings: Ratings;
  comments: {
    positive: string;
    negative: string;
  };
};
