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

export type { Status, TrendingItem, TrendingItemPayload };
