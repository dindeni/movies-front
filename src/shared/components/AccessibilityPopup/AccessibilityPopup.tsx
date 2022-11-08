import { FC } from 'react';

import { StyledSection, StyledMessage } from './AccessibilityPopup.styled';

const AccessibilityPopup: FC = () => {
  return (
    <StyledSection>
      <StyledMessage>
        Sorry tmdb data is not available for your country. Please use vpn.
      </StyledMessage>
    </StyledSection>
  );
};

export { AccessibilityPopup };
