import { gsap } from 'gsap';
import { FC, useEffect, useRef } from 'react';

import { StyledButton } from './ButtonHamburger.styled';
import { Props } from './types';

const initialAnimation = {
  '--rotate-before': '0deg',
  '--rotate-after': '0deg',
  '--top-before': 0,
  '--bottom-after': 0,
  duration: 0.5,
};

const ButtonHamburger: FC<Props> = ({ onClick, isOpen }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.to(buttonRef.current, initialAnimation);
  }, []);

  const handleStyledButtonClick = () => {
    if (isOpen) {
      gsap.to(buttonRef.current, initialAnimation);
    } else {
      gsap.to(buttonRef.current, {
        '--rotate-before': '45deg',
        '--rotate-after': '-45deg',
        '--top-before': '7px',
        '--bottom-after': '7px',
        keyframes: {
          '--opacity': [0, 0.5, 1],
        },
        duration: 0.5,
      });
    }
    onClick();
  };

  return (
    <StyledButton
      isOpen={isOpen}
      onClick={handleStyledButtonClick}
      ref={buttonRef}
      aria-label={isOpen ? 'open' : 'close'}
    />
  );
};

export { ButtonHamburger };
