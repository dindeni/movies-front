import { FC } from 'react';

import { Slider } from 'shared/components/Slider';

import {
  StyledSection,
  HeaderWrapper,
  StyledHeader,
  StyledLink,
} from './DailyTop.styled';
import { Props } from './types';

const DailyTop: FC<Props> = ({ slides, preventOnLoadImage }) => {
  return (
    <StyledSection>
      <HeaderWrapper>
        <StyledHeader>Daily top</StyledHeader>
        <StyledLink to="/trending/daily">see more</StyledLink>
      </HeaderWrapper>
      <Slider slides={slides} preventOnLoadImage={preventOnLoadImage} />
    </StyledSection>
  );
};

export { DailyTop };
