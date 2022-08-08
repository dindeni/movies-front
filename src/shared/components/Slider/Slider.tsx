import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { ImageLink } from './ImageLink';
import { StyledWrapper } from './Slider.styled';
import { Props } from './types';

const Slider: FC<Props> = ({ slides = [], preventOnLoadImage }) => {
  const slidesElements = slides.map(({ imagePath, imageAlt, id, link }, index) => (
    <SwiperSlide key={id}>
      <ImageLink
        id={id}
        imagePath={imagePath}
        imageAlt={imageAlt}
        link={link}
        slideNumber={index + 1}
        preventOnLoadImage={preventOnLoadImage}
      />
    </SwiperSlide>
  ));

  return (
    <StyledWrapper>
      <Swiper slidesPerView={3}>{slidesElements}</Swiper>
    </StyledWrapper>
  );
};

export { Slider };
