import { FC, useMemo, useRef, useEffect, useCallback, useState } from 'react';

import { Image } from 'shared/components/Image';
import { Loader } from 'shared/components/Loader';

import { StyledArticle, StyledHeader, StyledLink, LoaderWrapper } from './Catalog.styled';
import { Props } from './types';

const Catalog: FC<Props> = ({ movies, onIntersected, isLoaded, header }) => {
  const loaderWrapperRef = useRef<HTMLDivElement>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setIsUpdating(!isLoaded);
  }, [isLoaded]);

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const moviesList = useMemo(
    () =>
      movies.map(({ imagePath, imageAlt, id, link }, index) => (
        <StyledLink to={link} key={`${id}${index}`}>
          <Image src={imagePath} alt={imageAlt} />
        </StyledLink>
      )),
    [movies],
  );

  const observeLoaderWrapper = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const isUpdatingNotFirstRender =
        entry.intersectionRatio === 1 && !isUpdating && movies.length !== 0;
      if (isUpdatingNotFirstRender) {
        setIsUpdating(true);
        onIntersected();
      }
    },
    [isUpdating, movies],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observeLoaderWrapper, observerOptions);
    if (loaderWrapperRef.current) {
      observer.observe(loaderWrapperRef.current);
    }

    return () => {
      if (loaderWrapperRef.current) {
        observer.unobserve(loaderWrapperRef.current);
      }
    };
  }, [observeLoaderWrapper]);

  return (
    <div>
      <StyledHeader>{header}</StyledHeader>
      <StyledArticle>{moviesList}</StyledArticle>
      <LoaderWrapper ref={loaderWrapperRef}>{isUpdating && <Loader />}</LoaderWrapper>
    </div>
  );
};

export { Catalog };
