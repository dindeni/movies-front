import { FC } from 'react';

import { Props } from './types';
import { StyledWrapper, StyledIframe } from './Video.styled';

const Video: FC<Props> = ({ id, onLoaded }) => {

  return (
    <StyledWrapper>
      <StyledIframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        onLoad={onLoaded}
      />
    </StyledWrapper>
  );
};

export { Video };
