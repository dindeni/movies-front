import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

import { BaseLayout } from 'shared/layouts/BaseLayout';
import { theme } from 'styles/theme';

import { renderWithProviders } from './utils/redux';
import { dispatchResize } from './utils/viewport';

const component = (
  <ThemeProvider theme={theme}>
    <MemoryRouter>
      <BaseLayout>some content</BaseLayout>
    </MemoryRouter>
  </ThemeProvider>
);

describe('Base layout', () => {
  it('should render base layout', async () => {
    const { getByText } = await renderWithProviders(component);
    expect(getByText('some content')).toBeTruthy();
  });

  it('should hide/show header when scroll down/up', async () => {
    const { container } = await renderWithProviders(component);
    const header = container.querySelector('header')?.parentElement;
    await dispatchResize();
    await act(() => {
      fireEvent.scroll(window, { target: { scrollY: 200 } });
    });
    await act(async () => {
      await new Promise((value) => setTimeout(value, 1000));
    });
    expect(header?.style.transform).toBe('translate(0px, -100px) ');
    await act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100 } });
    });
    await act(async () => {
      await new Promise((value) => setTimeout(value, 1000));
    });
    expect(header?.style.transform).toBe('translate(0, 0)');
  });
});
