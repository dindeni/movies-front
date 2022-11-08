import { ProductionCompany } from 'shared/types/redux';

interface Trailer {
  name: string;
  key: string;
}

interface Props {
  name: string;
  overview: string | null;
  releaseDate: string;
  productionCompanies: ProductionCompany[];
  genres: string;
  homepage: string | null;
  posterPath: string | null;
  trailers: Trailer[];
}

export type { Props };
