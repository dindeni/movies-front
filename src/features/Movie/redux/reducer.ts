import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './constants';
import { getMovieDescription } from './thunks';
import { State, Payload } from './types';

const { reducer: movieReducer } = createSlice({
  name: 'registration',
  initialState: initialState,
  reducers: {},

  extraReducers: {
    [getMovieDescription.pending.type]: (state: State) => {
      state.status = 'start';
      state.movieDescription = null;
    },

    [getMovieDescription.fulfilled.type]: (
      state: State,
      { payload }: { payload: Payload },
    ) => {
      state.status = 'success';
      const [movieDescription, videos] = payload;
      if (movieDescription) {
        state.movieDescription = movieDescription;
      }
      if (videos) {
        state.videos = videos.results;
      }
    },

    [getMovieDescription.rejected.type]: (state: State) => {
      state.status = 'error';
      state.movieDescription = null;
    },
  },
});

export { movieReducer };
