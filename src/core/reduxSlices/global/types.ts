import { Status } from 'shared/types/redux';

interface State {
  isApiAvailable: boolean;
  availabilityStatus: Status;
}

export type { State };
