import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from 'shared/components/Footer';
import { Header } from 'shared/components/Header';
import { useViewport } from 'shared/hooks/useViewport';

import { StyledWrapper, StyledMain, FooterWrapper } from './BaseLayout.styled';
import { Props } from './types';

const BaseLayout: FC<Props> = ({ children }) => {
  const { height } = useViewport();

  return (
    <StyledWrapper height={height}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies</title>
      </Helmet>
      {height && (
        <>
          <Header logoText="Movies" />
          <StyledMain>{children}</StyledMain>
          <FooterWrapper>
            <Footer logoText="Movies" />
          </FooterWrapper>
        </>
      )}
    </StyledWrapper>
  );
};

export { BaseLayout };
