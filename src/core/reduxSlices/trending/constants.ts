import { State } from './types';

const initialState: State = {
  page: 0,
  dailyStatus: 'idle',
  dailyData: { results: [], totalResults: 0, totalPages: 0 },
  weeklyStatus: 'idle',
  weeklyData: { results: [], totalResults: 0, totalPages: 0 },
};

export { initialState };
