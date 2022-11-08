import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledHeader = styled.h3`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 32px;
  line-height: 48px;
  margin: 32px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export { StyledArticle, StyledHeader, StyledLink, LoaderWrapper };
