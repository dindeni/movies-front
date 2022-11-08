import { ReactNode } from 'react';

interface Props {
  background: 'gold' | 'secondaryGray' | 'transparent';
  isDisabled?: boolean;
  hasIconDone?: boolean;
  children?: ReactNode;
}

export type { Props };
