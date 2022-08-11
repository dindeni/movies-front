import { findAllByRole, getAllByRole, waitFor } from '@testing-library/dom';
import { fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';

import { TopMovies } from 'features/TopMovies/view/containers/TopMovies';
import { theme } from 'styles/theme';

import { dailyTopSlides } from './__mocks__/mockData';
import { renderWithProviders } from './utils/redux';
import { changeViewport, dispatchResize } from './utils/viewport';
import { Mock } from 'jest-mock';

const successHandler = [
  rest.get(`https://api.themoviedb.org/3/trending/movie/day`, (req, res, ctx) => {
    return res(ctx.json(dailyTopSlides), ctx.delay(150));
  }),
  rest.get(`https://api.themoviedb.org/3/trending/movie/week`, (req, res, ctx) => {
    return res(ctx.json(dailyTopSlides), ctx.delay(150));
  }),
];

const server = setupServer(...successHandler);

let mockIntersectionObserver;

beforeAll(() => server.listen());

beforeEach(() => {
  mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const component = (
  <ThemeProvider theme={theme}>
    <MemoryRouter>
      <TopMovies movieKind="day" />
    </MemoryRouter>
  </ThemeProvider>
);

describe('Movie description', () => {
  it('should render movies catalog', async () => {
    const { getByText } = await renderWithProviders(component);
    await waitFor(() => expect(getByText('Daily top')).toBeTruthy());
  });

  it('should render catalog images', async () => {
    const { container } = await renderWithProviders(component);
    const images = await findAllByRole(container, 'img');
    const mockEntry = { isIntersecting: false, intersectionRatio: 1 };
    const observerCallback = (
      window.IntersectionObserver as typeof mockIntersectionObserver
    ).mock.calls[0][0];
    observerCallback([mockEntry]);
    await waitFor(() => expect(images.length).toBe(4));
  });
});
