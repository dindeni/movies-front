import { FC } from 'react';

import { StyledLoader, StyledCircle } from './Loader.styled';

const Loader: FC = () => {
  return (
    <StyledLoader>
      <StyledCircle />
      <StyledCircle />
      <StyledCircle />
    </StyledLoader>
  );
};

export { Loader };
