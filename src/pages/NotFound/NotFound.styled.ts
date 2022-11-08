import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
`;

const StyledHeader = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.white};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  line-height: 20px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.white};
  position: relative;

  ::before {
    content: '';
    position: absolute;
    background: ${({ theme: { colors } }) => colors.gold};
    width: 100%;
    height: 4px;
    top: 24px;
  }
`;

export { StyledArticle, StyledHeader, StyledLink };
