import { Status, MovieDescription, VideoResult } from 'shared/types/redux';

interface State {
  status: Status;
  movieDescription: MovieDescription | null;
  videos: VideoResult[];
}

type Payload = [
  MovieDescription,
  {
    id: number;
    results: VideoResult[];
  },
];

export type { State, Payload };
