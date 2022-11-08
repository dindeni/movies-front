import { FC } from 'react';

import { TopMovies } from 'features/TopMovies/view/containers/TopMovies';
import { BaseLayout } from 'shared/layouts/BaseLayout';

import { Props } from './types';

const TopMoviesPage: FC<Props> = ({ movieKind }) => {
  return (
    <BaseLayout>
      <TopMovies movieKind={movieKind} />
    </BaseLayout>
  );
};

export { TopMoviesPage };
