import { FC } from 'react';

import { LogoText, LogoLink } from './Logo.styled';
import { Props } from './types';

const Logo: FC<Props> = ({ text }) => {
  return (
    <LogoText>
      <LogoLink to="/">{text}</LogoLink>
    </LogoText>
  );
};

export { Logo };
