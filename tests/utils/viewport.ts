import { act } from 'react-dom/test-utils';

const changeViewport = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

const dispatchResize = async () => {
  await act(async () => {
    window.dispatchEvent(new Event('resize'));
    await new Promise((r) => setTimeout(r, 300));
  });
};

export { changeViewport, dispatchResize };
