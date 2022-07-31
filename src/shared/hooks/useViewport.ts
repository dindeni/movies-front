import { useState, useEffect } from 'react';

import { debounce } from '../helpers/debounce';
import { MOBILE_BREAKPOINT } from '../constants/breakpoints';

const useViewport = () => {
  const [width, setWidth] = useState(0);
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setIsMobileWidth(window.innerWidth < MOBILE_BREAKPOINT);
    };
    const debouncedHandleWindowResize = debounce(handleWindowResize, 200);
    handleWindowResize();
    window.addEventListener('resize', debouncedHandleWindowResize);
    return () => window.removeEventListener('resize', debouncedHandleWindowResize);
  }, []);

  return { width, isMobileWidth };
};

export { useViewport };
