import { gsap } from 'gsap';
import { FC, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from 'shared/components/Footer';
import { Header } from 'shared/components/Header';
import { SearchContainer } from 'shared/containers/SearchContainer';
import { debounce } from 'shared/helpers/debounce';
import { useViewport } from 'shared/hooks/useViewport';

import {
  StyledWrapper,
  HeaderWrapper,
  StyledMain,
  FooterWrapper,
} from './BaseLayout.styled';
import { Props } from './types';

const BaseLayout: FC<Props> = ({ children }) => {
  const { height } = useViewport();
  const lastScroll = useRef(0);
  const headerWrapperRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDocumentScroll = () => {
    const currentScroll = window.scrollY;
    if (headerWrapperRef.current) {
      gsap.to(headerWrapperRef.current, {
        translateY: currentScroll > lastScroll.current ? -100 : 0,
      });
    }
    lastScroll.current = currentScroll;
  };

  useEffect(() => {
    const debouncedHandleDocumentScroll = debounce(handleDocumentScroll, 300);
    window.addEventListener('scroll', debouncedHandleDocumentScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleDocumentScroll);
    };
  }, []);

  const handleMenuChange = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <StyledWrapper height={height}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies</title>
      </Helmet>
      {height && (
        <>
          <HeaderWrapper ref={headerWrapperRef} isMenuOpen={isMenuOpen}>
            <Header logoText="Movies" onMobileMenuChange={handleMenuChange} />
          </HeaderWrapper>
          <StyledMain>
            <SearchContainer />
            {children}
          </StyledMain>
          <FooterWrapper>
            <Footer logoText="Movies" />
          </FooterWrapper>
        </>
      )}
    </StyledWrapper>
  );
};

export { BaseLayout };
