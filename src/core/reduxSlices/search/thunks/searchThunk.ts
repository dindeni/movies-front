import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'services/api/common/API';

const getSearchResult: AsyncThunkPayloadCreator<
  unknown,
  { page: number; query: string }
> = async ({ page, query }, { rejectWithValue }) => {
  const api = new API(
    `search/movie?api_key=${process.env.SECRET_API}&query=${query}&page=${page}&include_adult=false`,
  );
  try {
    return await api.getData();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue('error');
    }
  }
};

const searchMovie = createAsyncThunk('/search', getSearchResult);

export { searchMovie };
