import { FC } from 'react';

import { StyledLoader, StyledCircle } from './Loader.styled';

const Loader: FC = () => {
  return (
    <StyledLoader role="alert" aria-live="assertive">
      <StyledCircle />
      <StyledCircle />
      <StyledCircle />
    </StyledLoader>
  );
};

export { Loader };
