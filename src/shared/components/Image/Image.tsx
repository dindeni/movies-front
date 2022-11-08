import { forwardRef } from 'react';

import { ImageWrapper, StyledImage } from './Image.styled';
import { Props } from './types';

const Image = forwardRef<HTMLImageElement, Props>(
  (
    {
      src,
      alt,
      paddingTop = 150,
      onLoad,
      onPointerEnter,
      onPointerLeave,
      hasPointerOnImage,
      onClick,
    },
    ref,
  ) => {
    return (
      <ImageWrapper paddingTop={paddingTop}>
        <StyledImage
          src={src}
          alt={alt}
          onLoad={onLoad}
          ref={ref}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          hasPointer={hasPointerOnImage}
          onClick={onClick}
        />
      </ImageWrapper>
    );
  },
);

Image.displayName = 'Image';

export { Image };
