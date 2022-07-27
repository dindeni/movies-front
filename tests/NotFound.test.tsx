import { render, screen } from '@testing-library/react';
import { NotFound } from 'pages/NotFound';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import '@testing-library/jest-dom/extend-expect';

describe('NotFound', () => {
  let getByText;
  beforeEach(() => {
    const component = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </ThemeProvider>,
    );
    getByText = component.getByText;
  });

  it('should header exist and has white color', () => {
    expect(screen.findByText('Sorry! Page not found')).toBeTruthy();
    expect(getByText('Sorry! Page not found')).toHaveStyle('color: #ffffff');
  });

  it('should has link and href equal /', () => {
    expect(getByText('Go to main page')).toHaveAttribute('href', '/');
  });
});
