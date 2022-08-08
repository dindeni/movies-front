import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'services/api/common/API';

const getMovieDescriptionResult: AsyncThunkPayloadCreator<
  unknown,
  { id: number }
> = async ({ id }, { rejectWithValue }) => {
  const movieDescription = new API(`/movie/${id}?api_key=${process.env.SECRET_API}`);
  const videos = new API(`/movie/${id}/videos?api_key=${process.env.SECRET_API}`);
  try {
    return await Promise.all([movieDescription.getData(), videos.getData()]);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue('error');
    }
  }
};

const getMovieDescription = createAsyncThunk(
  '/getMovieDescription',
  getMovieDescriptionResult,
);

export { getMovieDescription };
