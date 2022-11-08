import { FC } from 'react';

import { Slider } from 'shared/components/Slider';

import {
  StyledSection,
  HeaderWrapper,
  StyledHeader,
  StyledLink,
} from './TopMovies.styled';
import { Props } from './types';

const TopMovies: FC<Props> = ({ slidesKind, slides, preventOnLoadImage }) => {
  return (
    <StyledSection>
      <HeaderWrapper>
        <StyledHeader>{slidesKind === 'daily' ? 'Daily' : 'Weekly'} top</StyledHeader>
        <StyledLink to={`/trending/${slidesKind}`}>see more</StyledLink>
      </HeaderWrapper>
      <Slider slides={slides} preventOnLoadImage={preventOnLoadImage} />
    </StyledSection>
  );
};

export { TopMovies };
