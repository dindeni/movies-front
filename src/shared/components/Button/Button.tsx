import { FC } from 'react';

import { StyledButton, ChildrenWrapper, IconWrapper } from './Button.styled';
import { Props } from './types';

const Button: FC<Props> = ({ background, isDisabled, hasIconDone, children }) => {
  const iconDone = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.9999 16.2L4.7999 12L3.3999 13.4L8.9999 19L20.9999 7L19.5999 5.6L8.9999 16.2Z"
        fill="#2E2E2E"
      />
    </svg>
  );

  return (
    <StyledButton background={background} disabled={isDisabled} hasIconDone={hasIconDone}>
      <ChildrenWrapper>
        {children}
        {hasIconDone && <IconWrapper>{iconDone}</IconWrapper>}
      </ChildrenWrapper>
    </StyledButton>
  );
};

export { Button };
