import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from 'shared/components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  let getByText;
  let container;
  beforeEach(() => {
    const component = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Header logoText="logoText" />
        </MemoryRouter>
      </ThemeProvider>,
    );
    getByText = component.getByText;
    container = component.container;
  });

  it('should header has logo', () => {
    expect(getByText('logoText')).toBeTruthy();
  });

  it('should navigation menu', () => {
    expect(container.getElementsByTagName('nav')).toBeTruthy();
  });

  it('should appear/disappear sub menu', () => {
    const menuItem = container.querySelector('li');
    fireEvent.pointerEnter(menuItem);
    expect(container.querySelector('li a')).toBeTruthy();
    fireEvent.pointerLeave(menuItem);
    expect(container.querySelector('li a')).toBeFalsy();
  });

  it('should when the button is clicked the menu opens', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 425,
    });
    window.dispatchEvent(new Event('resize'));
    const buttonElement = container.querySelector('[aria-label=close]');
    fireEvent.click(buttonElement);
    expect(container.querySelector('[aria-label=open]')).toBeTruthy();
  });
});
