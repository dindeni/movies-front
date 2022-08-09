import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Footer } from 'shared/components/Footer';
import { theme } from 'styles/theme';

import '@testing-library/jest-dom/extend-expect';

describe('Footer', () => {
  const component = (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <Footer logoText="logoText" />
      </MemoryRouter>
    </ThemeProvider>
  );

  it('should render footer', () => {
    const { container } = render(component);
    const footer = container.querySelector('footer');
    expect(footer).toBeTruthy();
  });
});
