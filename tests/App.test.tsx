import { App } from 'core/App';

import { renderWithProviders } from './utils/redux';

describe('App', () => {
  test('should render', () => {
    const { container } = renderWithProviders(<App />);
    const app = container.getElementsByClassName('app');
    expect(app.length).toBe(1);
  });
});
