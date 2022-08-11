import { FC, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Video } from 'shared/components/Video';

import { Slide } from './Slide/Slide';
import {
  StyledSection,
  StyledHeader,
  SlideWrapper,
  ButtonControl,
  StyledMessage,
} from './Trailers.styled';
import { Props } from './types';
import { VideoPopup } from './VideoPopup';

const INITIAL_SLIDES_PER_VIEW_DESKTOP = 3;
const INITIAL_SLIDES_PER_VIEW_TABLET = 1;

const Trailers: FC<Props> = ({ trailers, isTablet }) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [currentVideoKey, setCurrentVideoKey] = useState<string | null>(null);
  const initialSlidesPerView = isTablet
    ? INITIAL_SLIDES_PER_VIEW_TABLET
    : INITIAL_SLIDES_PER_VIEW_DESKTOP;

  const handlePlayButtonClick = (key: string) => {
    setCurrentVideoKey(key);
  };

  const handlePlayButtonClose = () => {
    setCurrentVideoKey(null);
  };

  const videoSlides = trailers.slice(1).map(({ key, name }) => (
    <SwiperSlide key={key}>
      <Slide trailer={{ key, name }} onPlayButtonClick={handlePlayButtonClick} />
    </SwiperSlide>
  ));

  const slidesPerView =
    videoSlides.length < initialSlidesPerView ? videoSlides.length : initialSlidesPerView;
  const [currentSlide, setCurrentSlide] = useState(slidesPerView - 1);

  const handleButtonNextClick = () => {
    swiper?.slideNext();
  };

  const handleButtonPrevClick = () => {
    swiper?.slidePrev();
  };

  const handleSlideChange = (event: SwiperCore) => {
    setCurrentSlide(event.activeIndex);
  };

  return (
    <>
      <StyledSection>
        <StyledHeader>Trailers</StyledHeader>
        {trailers[0] ? (
          <Video id={trailers[0].key} />
        ) : (
          <StyledMessage>No trailer yet!</StyledMessage>
        )}
        {trailers.length > 1 && (
          <SlideWrapper>
            <ButtonControl
              onClick={handleButtonPrevClick}
              isPrev
              aria-label="previous"
              disabled={currentSlide === 0}
            />
            <Swiper
              slidesPerView={slidesPerView}
              onSwiper={(swiperCore) => setSwiper(swiperCore)}
              onSlideChange={handleSlideChange}
            >
              {videoSlides}
            </Swiper>
            <ButtonControl
              onClick={handleButtonNextClick}
              aria-label="next"
              disabled={currentSlide + slidesPerView >= videoSlides.length}
            />
          </SlideWrapper>
        )}
        {currentVideoKey && (
          <VideoPopup videoKey={currentVideoKey} onClose={handlePlayButtonClose} />
        )}
      </StyledSection>
    </>
  );
};

export { Trailers };
