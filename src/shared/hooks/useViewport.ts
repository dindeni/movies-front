import { useState, useEffect } from 'react';

import { debounce } from '../helpers/debounce';

const useViewport = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    const debouncedHandleWindowResize = debounce(handleWindowResize, 200);
    handleWindowResize();
    window.addEventListener('resize', debouncedHandleWindowResize);
    return () => window.removeEventListener('resize', debouncedHandleWindowResize);
  }, []);

  return { width };
};

export { useViewport };
