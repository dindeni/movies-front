interface Movie {
  id: number;
  imagePath: string;
  imageAlt: string;
  link: string;
}

interface Props {
  movies: Movie[];
  onIntersected: () => void;
  isLoaded: boolean;
  header: string;
}

export type { Props, Movie };
