import { createSlice } from '@reduxjs/toolkit';

import { TrendingItemPayload } from 'shared/types/redux';

import { initialState } from './constants';
import { getDailyTrending } from './thunks';
import { Meta, State } from './types';

const { reducer: trendingReducer } = createSlice({
  name: 'registration',
  initialState: initialState,
  reducers: {},

  extraReducers: {
    [getDailyTrending.pending.type]: (state: State) => {
      state.dailyStatus = 'start';
    },

    [getDailyTrending.fulfilled.type]: (
      state: State,
      { payload, meta }: { payload: TrendingItemPayload; meta: Meta },
    ) => {
      const serverData = {
        results: payload.results,
        totalPages: payload.total_pages,
        totalResults: payload.total_results,
      };
      if (meta.arg.timePeriod === 'day') {
        state.dailyStatus = 'success';
        state.dailyData = serverData;
      } else {
        state.weeklyStatus = 'success';
        state.weeklyData = serverData;
      }
    },

    [getDailyTrending.rejected.type]: (state: State) => {
      state.dailyStatus = 'error';
    },
  },
});

export { trendingReducer };
