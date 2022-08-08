import { FC } from 'react';

import { MovieDescription } from 'features/Movie/view/containers/MovieDescription';
import { BaseLayout } from 'shared/layouts/BaseLayout';

const Movie: FC = () => {
  return (
    <BaseLayout>
      <MovieDescription />
    </BaseLayout>
  );
};

export { Movie };
