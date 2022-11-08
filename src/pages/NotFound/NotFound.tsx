import { FC } from 'react';

import { BaseLayout } from 'shared/layouts/BaseLayout';

import { StyledArticle, StyledHeader, StyledLink } from './NotFound.styled';
import { NotFoundProps } from './NotFound.types';

const NotFound: FC<NotFoundProps> = ({ disableAccessibilityPopup }) => {
  return (
    <BaseLayout disableAccessibilityPopup={disableAccessibilityPopup}>
      <StyledArticle>
        <StyledHeader>Sorry! Page not found</StyledHeader>
        <StyledLink to="/">Go to main page</StyledLink>
      </StyledArticle>
    </BaseLayout>
  );
};

export { NotFound };
