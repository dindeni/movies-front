import { gsap } from 'gsap';
import { FC, useRef, useState } from 'react';

import { Image } from 'shared/components/Image';
import { IMAGE_BASE_URL } from 'shared/constants/api';
import { useViewport } from 'shared/hooks/useViewport';

import { AboutMovie } from '../../components/AboutMovie';
import { Trailers } from '../../components/Trailers';
import {
  StyledArticle,
  ImageWrapper,
  IconZoom,
  TrailersWrapper,
} from './MainContent.styled';
import { Props } from './types';

const TABLET_BREAKPOINT = 900;

const MainContent: FC<Props> = ({
  name,
  posterPath,
  releaseDate,
  overview,
  productionCompanies,
  genres,
  homepage,
  trailers,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isPosterScaled, setIsScaled] = useState(false);
  const { width } = useViewport();

  const increaseImageZoom = () => {
    if (width < TABLET_BREAKPOINT) return;
    if (imageRef?.current) {
      gsap.to(imageRef.current, {
        scale: 1.2,
        zIndex: 10,
        delay: 0.2,
      });
      setIsScaled(true);
    }
  };

  const decreaseImageZoom = () => {
    if (width < TABLET_BREAKPOINT) return;
    if (imageRef?.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        zIndex: 0,
        delay: 0.2,
      });
      setIsScaled(false);
    }
  };

  const handleImagePointerEnter = () => {
    increaseImageZoom();
  };

  const handleImagePointerLeave = () => {
    decreaseImageZoom();
  };

  const handleImageClick = () => {
    setIsScaled(!isPosterScaled);
    if (isPosterScaled) {
      decreaseImageZoom();
    } else {
      increaseImageZoom();
    }
  };

  return (
    <>
      <StyledArticle>
        {posterPath && (
          <ImageWrapper>
            <Image
              src={`${IMAGE_BASE_URL}/w${500}/${posterPath}`}
              alt={`poster movie - ${name}`}
              onPointerEnter={handleImagePointerEnter}
              onPointerLeave={handleImagePointerLeave}
              onClick={handleImageClick}
              ref={imageRef}
              hasPointerOnImage={width > TABLET_BREAKPOINT}
            />
            {width > TABLET_BREAKPOINT && <IconZoom />}
          </ImageWrapper>
        )}
        <AboutMovie
          name={name}
          overview={overview}
          releaseDate={releaseDate}
          productionCompanies={productionCompanies}
          genres={genres}
          homepage={homepage}
        />
      </StyledArticle>
      <TrailersWrapper>
        <Trailers trailers={trailers} isTablet={width < TABLET_BREAKPOINT} />
      </TrailersWrapper>
    </>
  );
};

export { MainContent };
