import { FC } from 'react';

import { ReactComponent as IconMovies } from 'static/icons/icon-movies.svg';

import { LogoText, LogoLink } from './Logo.styled';
import { Props } from './types';

const Logo: FC<Props> = ({ text }) => {
  return (
    <LogoText>
      <LogoLink to="/">
        <IconMovies width={64} height={48} />
        {text}
      </LogoLink>
    </LogoText>
  );
};

export { Logo };
