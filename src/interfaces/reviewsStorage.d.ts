export type reviewsStorage = {
  [key?: string]: reviewItem;
};

type reviewItem = {
  img: string;
  review: string;
  score: number;
};
