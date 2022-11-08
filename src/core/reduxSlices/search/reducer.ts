import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './constants';
import { searchMovie } from './thunks';
import { Payload, State } from './types';

const {
  reducer: searchReducer,
  actions: { clearSearchResults },
} = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    clearSearchResults: (state: State) => {
      state.status = 'idle';
      state.movies = initialState.movies;
    },
  },

  extraReducers: {
    [searchMovie.pending.type]: (state: State) => {
      state.status = 'start';
    },

    [searchMovie.fulfilled.type]: (state: State, { payload }: { payload: Payload }) => {
      state.status = 'success';
      state.movies = payload;
    },

    [searchMovie.rejected.type]: (state: State) => {
      state.status = 'error';
      state.movies = initialState.movies;
    },
  },
});

export { searchReducer, clearSearchResults };
