import { gsap } from 'gsap';
import { FC, useRef, useEffect, useMemo } from 'react';

import { MOBILE_BREAKPOINT } from 'shared/constants/breakpoints';
import { debounce } from 'shared/helpers/debounce';
import { useViewport } from 'shared/hooks/useViewport';

import { SearchResultPopupProps } from '../types';
import {
  StyledWrapper,
  StyledList,
  StyledItem,
  StyledImage,
  StyledLink,
  ButtonClose,
} from './SearchResultPopup.styled';
const MARGIN = 16;

const SearchResultPopup: FC<SearchResultPopupProps> = ({
  searchResults,
  onButtonCloseClick,
  onLinkClick,
  hasError,
  hasSearchText,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonCloseRef = useRef(null);
  const { width, height } = useViewport();

  const padding = useMemo(() => (width > MOBILE_BREAKPOINT ? '48px' : '32px'), [width]);

  useEffect(() => {
    if (wrapperRef.current) {
      gsap.to(wrapperRef.current, {
        maxHeight:
          window.innerHeight - wrapperRef.current.getBoundingClientRect().top - MARGIN,
        padding,
      });
    }
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [width, height]);

  useEffect(() => {
    if (!hasSearchText) {
      hidePopup();
    }
  }, [hasSearchText]);

  const searchItems = searchResults.map(
    ({ imagePath, movieName, imageAlt, link, id }) => (
      <StyledItem key={id}>
        <StyledLink to={link} onClick={onLinkClick}>
          <StyledImage src={imagePath} alt={imageAlt} width={100} />
          {movieName}
        </StyledLink>
      </StyledItem>
    ),
  );

  const handleWrapperScroll = () => {
    if (wrapperRef.current) {
      gsap.to(buttonCloseRef.current, {
        top: wrapperRef.current.scrollTop + MARGIN,
      });
    }
  };

  const debouncedHandleWrapperScroll = useMemo(
    () => debounce(handleWrapperScroll, 300),
    [wrapperRef.current],
  );

  const hidePopup = async () => {
    gsap.to(wrapperRef.current, {
      maxHeight: 0,
      duration: 0.4,
    });
    await gsap.to(wrapperRef.current, {
      padding: `0 ${padding}`,
      delay: 0.3,
      duration: 0.4,
    });
    onButtonCloseClick();
  };

  const handleButtonClose = async () => {
    hidePopup();
  };

  const textMessage = hasError
    ? 'Error occurred! Please try again!'
    : 'Movies not Found! Try again';

  return (
    <StyledWrapper ref={wrapperRef} onScroll={debouncedHandleWrapperScroll}>
      {searchResults.length > 0 ? <StyledList>{searchItems}</StyledList> : textMessage}
      <ButtonClose aria-label="close" onClick={handleButtonClose} ref={buttonCloseRef} />
    </StyledWrapper>
  );
};

export { SearchResultPopup };
