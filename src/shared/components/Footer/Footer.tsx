import { FC } from 'react';

import { ReactComponent as TmdbIcon } from 'static/icons/tmdb-logo.svg';

import { Logo } from '../Logo';
import {
  StyledFooter,
  StyledContent,
  LeftSide,
  RightSide,
  TmdbWrapper,
  TmdbLogogWrapper,
} from './Footer.styled';
import { Props } from './Props';

const Footer: FC<Props> = ({ logoText }) => {
  return (
    <StyledFooter>
      <StyledContent>
        <LeftSide>
          <Logo text={logoText} />
        </LeftSide>
        <RightSide>
          <TmdbWrapper>
            We're using the TMDB API
            <TmdbLogogWrapper>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.themoviedb.org/"
              >
                <TmdbIcon />
              </a>
            </TmdbLogogWrapper>
          </TmdbWrapper>
        </RightSide>
      </StyledContent>
    </StyledFooter>
  );
};

export { Footer };
