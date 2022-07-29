import { createSlice } from '@reduxjs/toolkit';
import { TrendingItemPayload } from 'shared/types/redux';

import { initialState } from './constants';
import { getTrending } from './thunks';
import { State } from './types';

const { reducer: trendingReducer } = createSlice({
  name: 'registration',
  initialState: initialState,
  reducers: {},

  extraReducers: {
    [getTrending.pending.type]: (state: State) => {
      state.status = 'start';
    },

    [getTrending.fulfilled.type]: (
      state: State,
      { payload }: { payload: TrendingItemPayload },
    ) => {
      state.status = 'success';
      state.data = {
        results: payload.results,
        totalPages: payload.total_pages,
        totalResults: payload.total_results,
      };
    },

    [getTrending.rejected.type]: (state: State) => {
      state.status = 'error';
    },
  },
});

export { trendingReducer };
