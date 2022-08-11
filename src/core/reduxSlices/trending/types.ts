import { Status, TrendingItem } from 'shared/types/redux';

interface State {
  dailyStatus: Status;
  dailyData: TrendingItem;
  weeklyStatus: Status;
  weeklyData: TrendingItem;
  page: number;
}

interface Meta {
  arg: {
    page: number;
    timePeriod: 'day' | 'week';
  };
}

export type { State, Meta };
