import { State } from './types';

const initialState: State = {
  status: 'idle',
  movies: {
    page: 0,
    results: [],
  },
};

export { initialState };
