import { FC, useState } from 'react';

import { ImageProps } from '../types';
import { StyledImage, StyledLink, StyledNumber } from './Image.styled';

const Image: FC<ImageProps> = ({ link, imagePath, imageAlt, slideNumber, preventOnLoadImage }) => {
  const [isRendered, setIsRendered] = useState(false);

  const handleStyledImageRendered = () => {
    setIsRendered(true);
  };

  return (
    <StyledLink to={link}>
      <StyledImage src={imagePath} alt={imageAlt} onLoad={handleStyledImageRendered} />
      {(isRendered || preventOnLoadImage) && <StyledNumber>{slideNumber}</StyledNumber>}
    </StyledLink>
  );
};

export { Image };
