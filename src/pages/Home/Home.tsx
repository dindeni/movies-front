import { FC } from 'react';

import { Main } from 'features/Main/view/containers/Main';
import { BaseLayout } from 'shared/layouts/BaseLayout';

const Home: FC = () => {
  return (
    <BaseLayout>
      <Main />
    </BaseLayout>
  );
};

export { Home };
