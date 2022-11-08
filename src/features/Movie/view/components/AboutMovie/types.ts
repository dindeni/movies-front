import { ProductionCompany } from 'shared/types/redux';

interface Props {
  name: string;
  overview: string | null;
  releaseDate: string;
  productionCompanies: ProductionCompany[];
  genres: string;
  homepage: string | null;
}

export type { Props };
