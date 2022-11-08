import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'services/api/common/API';

const checkAPIAvailabilityResult: AsyncThunkPayloadCreator<unknown> = async (
  _value,
  { rejectWithValue },
) => {
  const api = new API(
    `/search/company?api_key=${process.env.SECRET_API}&query=test&page=1`,
  );
  try {
    return await api.getData();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue('error');
    }
  }
};

const checkAPIAvailability = createAsyncThunk('/global', checkAPIAvailabilityResult);

export { checkAPIAvailability };
