export type ResObect = {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
  data: Array<Data>;
};

export type Data = {
  mal_id: number;
  url: string;
  images: {
    jpg: null | {
      image_url: string | null;
      small_image_url: string | null;
      large_image_url: string | null;
    };
    webp: null | {
      image_url: string | null;
      small_image_url: string | null;
      large_image_url: string | null;
    };
  };
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  type: string | null;
  source: string | null;
  episodes: number | null;
  status: string | null;
  airing: boolean;
  duration: string | null;
  rating: string | null;
  score: number | null;
  popularity: number | null;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  studios: Array<{ name: string | null }> | null;
  genres: Array<{ name: string }> | null;
};
