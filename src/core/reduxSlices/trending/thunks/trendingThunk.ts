import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'services/api/common/API';

const getTrendingResult: AsyncThunkPayloadCreator<
  unknown,
  { timePeriod: 'day' | 'week'; page: number }
> = async ({ timePeriod, page }, { rejectWithValue }) => {
  const api = new API(
    `trending/movie/${timePeriod}?api_key=${process.env.SECRET_API}&page=${page}`,
  );
  try {
    return await api.getData();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue('error');
    }
  }
};

const getDailyTrending = createAsyncThunk('/getDailyTrending', getTrendingResult);

export { getDailyTrending };
