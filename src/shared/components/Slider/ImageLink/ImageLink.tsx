import { FC, useState } from 'react';

import { Image } from 'shared/components/Image/Image';

import { ImageProps } from '../types';
import { StyledLink, StyledNumber } from './ImageLink.styled';

const ImageLink: FC<ImageProps> = ({
  link,
  imagePath,
  imageAlt,
  slideNumber,
  preventOnLoadImage,
}) => {
  const [isRendered, setIsRendered] = useState(false);

  const handleStyledImageRendered = () => {
    setIsRendered(true);
  };

  return (
    <StyledLink to={link || ''}>
      <Image src={imagePath} alt={imageAlt} onLoad={handleStyledImageRendered} />
      {(isRendered || preventOnLoadImage) && <StyledNumber>{slideNumber}</StyledNumber>}
    </StyledLink>
  );
};

export { ImageLink };
