import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NotFound } from 'pages/NotFound';
import { theme } from 'styles/theme';

import { renderWithProviders } from './utils/redux';

import '@testing-library/jest-dom/extend-expect';

describe('NotFound', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <NotFound disableAccessibilityPopup />
      </MemoryRouter>
    </ThemeProvider>
  );
  it('should header exist and has white color', () => {
    const { getByText } = renderWithProviders(component);
    expect(screen.findByText('Sorry! Page not found')).toBeTruthy();
    expect(getByText('Sorry! Page not found')).toHaveStyle('color: #ffffff');
  });

  it('should has link and href equal /', () => {
    const { getByText } = renderWithProviders(component);
    expect(getByText('Go to main page')).toHaveAttribute('href', '/');
  });
});
