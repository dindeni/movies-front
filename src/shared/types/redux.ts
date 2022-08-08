type Status = 'start' | 'error' | 'success' | 'idle';

interface TrendingItemPayload {
  results: TrendingResults[];
  total_pages: number;
  total_results: number;
}

interface TrendingItem {
  results: TrendingResults[];
  totalPages: number;
  totalResults: number;
}

interface TrendingResults {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: 'movie' | 'tv' | 'person' | 'all';
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: string;
  name: string;
}

interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

interface MovieDescription {
  id: number;
  imdb_id: number;
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface VideoResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export type {
  Status,
  TrendingItem,
  TrendingItemPayload,
  MovieDescription,
  ProductionCompany,
  Genre,
  VideoResult,
};
