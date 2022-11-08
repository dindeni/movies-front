import { useState, useEffect } from 'react';

import { debounce } from '../helpers/debounce';

const useViewport = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    const debouncedHandleWindowResize = debounce(handleWindowResize, 200);
    handleWindowResize();
    window.addEventListener('resize', debouncedHandleWindowResize);
    return () => window.removeEventListener('resize', debouncedHandleWindowResize);
  }, []);

  return { width, height };
};

export { useViewport };
