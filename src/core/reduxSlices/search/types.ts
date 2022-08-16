import { Status, MovieResult } from 'shared/types/redux';

interface Payload {
  page: number;
  results: MovieResult[];
}

interface State {
  status: Status;
  movies: Payload;
}

interface Meta {
  arg: {
    page: number;
    timePeriod: 'day' | 'week';
  };
}

export type { State, Payload, Meta };
