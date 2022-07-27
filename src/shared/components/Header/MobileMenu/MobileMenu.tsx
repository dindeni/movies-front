import { gsap } from 'gsap';
import { FC, useRef, useEffect } from 'react';

import { MobileMenuWrapper } from './MobileMenu.styled';
import { Props } from './types';

const initialAnimation = {
  width: 0,
  opacity: 0,
};

const MobileMenu: FC<Props> = ({ isOpen, children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.to(wrapperRef.current, initialAnimation);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(wrapperRef.current, {
        width: '80%',
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(wrapperRef.current, initialAnimation);
    }
  }, [isOpen]);

  return (
    <MobileMenuWrapper isOpen={isOpen} ref={wrapperRef}>
      {children}
    </MobileMenuWrapper>
  );
};

export { MobileMenu };
