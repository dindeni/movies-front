import { render } from '@testing-library/react';
import { App } from 'core/App';

describe('App', () => {
  test('should render', () => {
    const { container } = render(<App />);
    const app = container.getElementsByClassName('app');
    expect(app.length).toBe(1);
  });
});
