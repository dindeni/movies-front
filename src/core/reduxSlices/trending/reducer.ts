import { createSlice } from '@reduxjs/toolkit';

import { TrendingItemPayload } from 'shared/types/redux';

import { initialState } from './constants';
import { getTrending } from './thunks';
import { Meta, State } from './types';

const { reducer: trendingReducer } = createSlice({
  name: 'registration',
  initialState: initialState,
  reducers: {},

  extraReducers: {
    [getTrending.pending.type]: (state: State, { meta }: { meta: Meta }) => {
      if (meta.arg.timePeriod === 'day') {
        state.dailyStatus = 'start';
        state.dailyData = initialState.dailyData;
      } else {
        state.weeklyStatus = 'start';
        state.weeklyData = initialState.weeklyData;
      }
    },

    [getTrending.fulfilled.type]: (
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
      state.page = meta.arg.page;
    },

    [getTrending.rejected.type]: (state: State, { meta }: { meta: Meta }) => {
      if (meta.arg.timePeriod === 'day') {
        state.dailyStatus = 'error';
      } else {
        state.weeklyStatus = 'error';
      }
    },
  },
});

export { trendingReducer };
