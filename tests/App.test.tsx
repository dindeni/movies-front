import { render, screen } from '@testing-library/react';
import { App } from 'core/App';

describe('App', () => {
  test('should render', () => {
    render(<App />);
    expect(screen.getByText('Hello World!')).toBeTruthy();
  });
});
