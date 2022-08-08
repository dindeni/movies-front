import { FC, useRef } from 'react';

import { Image } from 'shared/components/Image';

import { SlideProps } from '../types';
import { StyledWrapper, ImageWrapper, PlayButton, Caption } from './Slide.styled';

const Slide: FC<SlideProps> = ({ trailer: { key, name }, onPlayButtonClick }) => {
  const wrapperRef = useRef(null);

  const handlePlayButtonClick = () => {
    onPlayButtonClick(key);
  };

  return (
    <StyledWrapper ref={wrapperRef}>
      <ImageWrapper>
        <Image
          src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`}
          alt={name}
          paddingTop={56}
        />
        <PlayButton aria-label="play" onClick={handlePlayButtonClick} />
      </ImageWrapper>
      <Caption>{name}</Caption>
    </StyledWrapper>
  );
};

export { Slide };
