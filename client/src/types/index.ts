export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  popularity: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  tagline: string;
  genres: Genre[];
  runtime: number;
  status: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  type: string;
  published_at: string;
}