import { waitFor } from '@testing-library/dom';
import { fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

import { MovieDescription } from 'features/Movie/view/containers/MovieDescription';
import { theme } from 'styles/theme';

import { movieDescription, trailers } from './__mocks__/mockData';
import { renderWithProviders } from './utils/redux';
import { changeViewport, dispatchResize } from './utils/viewport';

const successHandler = [
  rest.get('https://api.themoviedb.org/3/movie/123', (req, res, ctx) => {
    return res(ctx.json(movieDescription), ctx.delay(150));
  }),
  rest.get('https://api.themoviedb.org/3/movie/123/videos', (req, res, ctx) => {
    return res(ctx.json(trailers), ctx.delay(150));
  }),
];

const successHandlerWithEmptyTrailerData = [
  rest.get('https://api.themoviedb.org/3/movie/123', (req, res, ctx) => {
    return res(ctx.json(movieDescription), ctx.delay(150));
  }),
  rest.get('https://api.themoviedb.org/3/movie/123/videos', (req, res, ctx) => {
    return res(ctx.json(null), ctx.delay(150));
  }),
];

const successHandlerWithEmptyMovieData = [
  rest.get('https://api.themoviedb.org/3/movie/123', (req, res, ctx) => {
    return res(ctx.json(null), ctx.delay(150));
  }),
  rest.get('https://api.themoviedb.org/3/movie/123/videos', (req, res, ctx) => {
    return res(ctx.json(trailers), ctx.delay(150));
  }),
];

const errorHandler = [
  rest.get('https://api.themoviedb.org/3/movie/123', (req, res, ctx) => {
    ctx.delay(150);
    return res(ctx.status(404));
  }),
  rest.get('https://api.themoviedb.org/3/movie/123/videos', (req, res, ctx) => {
    ctx.delay(150);
    return res(ctx.status(404));
  }),
];

const server = setupServer(...successHandler);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ id: '123' }),
  useHistory: jest.fn(),
}));

const component = (
  <ThemeProvider theme={theme}>
    <MovieDescription />
  </ThemeProvider>
);

describe('Movie description', () => {
  it('should render movie description', async () => {
    const { getByText } = await renderWithProviders(component);
    await waitFor(() => expect(getByText('Release - 15 June 2022')).toBeTruthy());
  });

  it('should video popup showing ', async () => {
    const { findAllByLabelText, findByLabelText } = await renderWithProviders(component);
    const buttons = await findAllByLabelText('play');
    fireEvent.click(buttons[0]);
    const closeButton = findByLabelText('close video');
    expect(closeButton).toBeTruthy();
  });

  it('should poster image zoomed/zoomed out(image styles changed)', async () => {
    const { findByAltText } = await renderWithProviders(component);
    const image = await findByAltText('poster movie - Lightyear');
    await dispatchResize();
    fireEvent.pointerEnter(image);
    await new Promise((r) => setTimeout(r, 1000));
    expect(image.style.transform).toBe('scale(1.2, 1.2) ');
    fireEvent.pointerLeave(image);
    await new Promise((r) => setTimeout(r, 1000));
    expect(image.style.transform).not.toBe('scale(1.2, 1.2) ');
    fireEvent.click(image);
    await new Promise((r) => setTimeout(r, 1000));
    expect(image.style.transform).toBe('scale(1.2, 1.2) ');
    fireEvent.click(image);
    await new Promise((r) => setTimeout(r, 1000));
    expect(image.style.transform).not.toBe('scale(1.2, 1.2) ');
  });

  it('should not poster image zoomed/zoomed out(image styles changed) on mobile', async () => {
    changeViewport(425);
    const { findByAltText } = await renderWithProviders(component);
    const image = await findByAltText('poster movie - Lightyear');
    await dispatchResize();
    fireEvent.pointerEnter(image);
    expect(image).not.toHaveStyle('z-index: 10;');
    image.style.zIndex = '10';
    image.style.transform = 'scale(1.2)';
    fireEvent.pointerLeave(image);
    expect(image).toHaveStyle('z-index: 10;');
  });

  it('should not render trailer when got empty videos response', async () => {
    await server.resetHandlers(...successHandlerWithEmptyTrailerData);
    const { getByText } = await renderWithProviders(component);
    await waitFor(() => expect(getByText('No trailer yet!')).toBeTruthy());
  });

  it('should not render movie description when got empty movie response', async () => {
    await server.resetHandlers(...successHandlerWithEmptyMovieData);
    const { container } = await renderWithProviders(component);
    const articleElement = container.getElementsByTagName('article');
    await waitFor(() => expect(articleElement.length).toBe(0));
  });

  it('should not render movie description when got 404 response', async () => {
    await server.resetHandlers(...errorHandler);
    const { container } = await renderWithProviders(component);
    const articleElement = container.getElementsByTagName('article');
    await waitFor(() => expect(articleElement.length).toBe(0));
  });
});
