import type { PreloadedState } from '@reduxjs/toolkit';
import { RenderOptions, render } from '@testing-library/react';
import { ReactElement, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { setupStore, RootState, AppStore } from 'core/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export { renderWithProviders };
