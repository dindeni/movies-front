import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './constants';
import { checkAPIAvailability } from './thunks';
import { State } from './types';

const { reducer: globalReducer } = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {},

  extraReducers: {
    [checkAPIAvailability.pending.type]: (state: State) => {
      state.availabilityStatus = 'start';
    },

    [checkAPIAvailability.fulfilled.type]: (state: State) => {
      state.availabilityStatus = 'success';
      state.isApiAvailable = true;
    },

    [checkAPIAvailability.rejected.type]: (state: State) => {
      state.availabilityStatus = 'error';
      state.isApiAvailable = false;
    },
  },
});

export { globalReducer };
