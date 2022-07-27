import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'shared/components/Header';

import { StyledWrapper, StyledMain } from './BaseLayout.styled';
import { Props } from './types';

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies</title>
      </Helmet>
      <Header logoText="Movies" />
      <StyledMain>{children}</StyledMain>
    </StyledWrapper>
  );
};

export { BaseLayout };
