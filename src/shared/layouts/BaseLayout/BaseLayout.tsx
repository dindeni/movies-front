import { gsap } from 'gsap';
import { FC, useEffect, useRef, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';

import { checkAPIAvailability } from 'core/reduxSlices/global/thunks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { AccessibilityPopup } from 'shared/components/AccessibilityPopup';
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

const BaseLayout: FC<Props> = ({ disableAccessibilityPopup, children }) => {
  const dispatch = useAppDispatch();
  const { height } = useViewport();
  const lastScroll = useRef(0);
  const headerWrapperRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isApiAvailable, availabilityStatus } = useAppSelector((state) => state.global);

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

    const handleLocalstorageUnload = () => localStorage.removeItem('apiAvailability');
    window.addEventListener('unload', handleLocalstorageUnload);

    if (!localStorage.getItem('apiAvailability')) dispatch(checkAPIAvailability());

    return () => {
      window.removeEventListener('scroll', debouncedHandleDocumentScroll);
      window.removeEventListener('unload', handleLocalstorageUnload);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'apiAvailability',
      `${isApiAvailable ? 'available' : 'not available'}`,
    );
  }, [isApiAvailable]);

  const mainContent = useMemo(
    () => (
      <>
        <SearchContainer />
        {children}
      </>
    ),
    [children],
  );

  const isMainContentShown = useMemo(() => {
    return (
      !disableAccessibilityPopup &&
      (availabilityStatus === 'success' || availabilityStatus === 'error')
    );
  }, [availabilityStatus, disableAccessibilityPopup]);

  const handleMenuChange = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <StyledWrapper height={height}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies</title>
        <link rel="icon" type="image/png" href="/favicons/favicon.ico" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicons/favicon-32.png" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link rel="icon" sizes="192x192" href="/favicons/android-192.png" />
        <link rel="icon" sizes="512x512" href="/favicons/android-512.png" />
      </Helmet>
      {height && (
        <>
          <HeaderWrapper ref={headerWrapperRef} isMenuOpen={isMenuOpen}>
            <Header logoText="Movies" onMobileMenuChange={handleMenuChange} />
          </HeaderWrapper>
          <StyledMain>
            {isMainContentShown && (
              <>{isApiAvailable ? mainContent : <AccessibilityPopup />}</>
            )}
            {disableAccessibilityPopup && mainContent}
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
