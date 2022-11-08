import { waitFor } from '@testing-library/dom';
import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

import { Main } from 'features/Main/view/containers/Main';
import { theme } from 'styles/theme';

import { dailyTopSlides } from './__mocks__/mockData';
import { renderWithProviders } from './utils/redux';
import { changeViewport } from './utils/viewport';

const successHandler = [
  rest.get(`https://api.themoviedb.org/3/trending/movie/day`, (req, res, ctx) => {
    return res(ctx.json(dailyTopSlides), ctx.delay(150));
  }),
  rest.get(`https://api.themoviedb.org/3/trending/movie/week`, (req, res, ctx) => {
    return res(ctx.json(dailyTopSlides), ctx.delay(150));
  }),
];

const errorHandler = [
  rest.get(`https://api.themoviedb.org/3/trending/movie/day`, (req, res, ctx) => {
    ctx.delay(150);
    return res(ctx.status(404));
  }),
  rest.get(`https://api.themoviedb.org/3/trending/movie/week`, (req, res, ctx) => {
    ctx.delay(150);
    return res(ctx.status(404));
  }),
];

const server = setupServer(...successHandler);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const component = (
  <ThemeProvider theme={theme}>
    <MemoryRouter>
      <Main preventOnLoadImage />
    </MemoryRouter>
  </ThemeProvider>
);

describe('DailyTop', () => {
  it('should render daily top', async () => {
    const { getByText } = await renderWithProviders(component);
    expect(await getByText('Daily top')).toBeTruthy();
  });

  it('should render slider', async () => {
    const { container } = renderWithProviders(component);
    const sliderWrapper = container.querySelectorAll('.swiper-wrapper');
    await waitFor(() => expect(sliderWrapper[0].children.length).toBe(4));
    await waitFor(() => expect(sliderWrapper[1].children.length).toBe(4));
  });

  it('should render mobile slider', async () => {
    changeViewport(425);
    const { container } = renderWithProviders(component);
    const sliderWrapper = container.querySelectorAll('.swiper-wrapper');
    await waitFor(() => expect(sliderWrapper[0].children.length).toBe(4));
    await waitFor(() => expect(sliderWrapper[1].children.length).toBe(4));
    changeViewport(1024);
  });

  it('should number tooltip(inside image slide has styling)', async () => {
    renderWithProviders(component);
    await waitFor(() =>
      expect(screen.getAllByText('1')[0]).toHaveStyle('border: 1px solid #fed530;'),
    );
  });

  it('should not have slides when response error occurred', async () => {
    await server.resetHandlers(...errorHandler);
    const { container } = renderWithProviders(component);
    const sliderWrapper = container.querySelectorAll('.swiper-wrapper');
    await waitFor(() => expect(sliderWrapper[0].children.length).toBe(3));
    await waitFor(() => expect(sliderWrapper[1].children.length).toBe(3));
  });
});
