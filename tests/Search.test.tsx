import { fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';

import { SearchContainer } from 'shared/containers/SearchContainer';
import { theme } from 'styles/theme';

import { searchMock } from './__mocks__/mockData';
import { renderWithProviders } from './utils/redux';


const successHandler = [
  rest.get('https://api.themoviedb.org/3/search/movie', (req, res, ctx) => {
    return res(ctx.json(searchMock), ctx.delay(0));
  }),
];

const errorHandler = [
  rest.get('https://api.themoviedb.org/3/search/movie', (req, res, ctx) => {
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
      <SearchContainer />
    </MemoryRouter>
  </ThemeProvider>
);

describe('Search', () => {
  it('should render search', async () => {
    const { getByPlaceholderText } = renderWithProviders(component);
    expect(getByPlaceholderText('search')).toBeTruthy();
  });

  it('should popup showing when input changed/close when click button close', async () => {
    const { getByPlaceholderText, findAllByRole, getByLabelText } =
      renderWithProviders(component);
    const input = getByPlaceholderText('search');
    fireEvent.change(input, { target: { value: 'search request' } });
    await act(async () => {
      await new Promise((value) => setTimeout(value, 1000));
    });
    const links = await findAllByRole('link');
    expect(links.length).toBe(4);

    const buttonClose = getByLabelText('close');
    fireEvent.click(buttonClose);
    await act(async () => {
      await new Promise((value) => setTimeout(value, 1000));
    });
    expect(links[0]).not.toBeInTheDocument();
  });

  it('should hide popup when empty input value', async () => {
    const { getByPlaceholderText, findAllByRole } = renderWithProviders(component);
    const input = getByPlaceholderText('search');
    fireEvent.change(input, { target: { value: 'search request' } });
    await act(async () => {
      await new Promise((value) => setTimeout(value, 1000));
    });
    const links = await findAllByRole('link');

    fireEvent.change(input, { target: { value: '' } });
    await act(async () => {
      await new Promise((value) => setTimeout(value, 1000));
    });
    expect(links[0]).not.toBeInTheDocument();
  });

  it('should ', async () => {
    await server.resetHandlers(...errorHandler);
    const { getByPlaceholderText, getByText } = renderWithProviders(component);
    const input = getByPlaceholderText('search');
    fireEvent.change(input, { target: { value: 'search request' } });
    await act(async () => {
      await new Promise((value) => setTimeout(value, 1000));
    });
    expect(getByText('Error occurred! Please try again!')).toBeTruthy();
  });
});
