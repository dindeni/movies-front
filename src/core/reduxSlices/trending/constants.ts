import { State } from './types';

const initialState: State = {
  dailyStatus: 'idle',
  dailyData: { results: [], totalResults: 0, totalPages: 0 },
  weeklyStatus: 'idle',
  weeklyData: { results: [], totalResults: 0, totalPages: 0 },
};

export { initialState };
