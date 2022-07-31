import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section``;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeader = styled.h2`
  margin: 32px 0;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 32px;
  line-height: 48px;

  @media (max-width: 450px) {
    margin: 16px 0;
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme: { colors } }) => colors.white};
  text-decoration: none;
  margin-left: 15px;
  border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.gold}`};
`;

export { StyledSection, HeaderWrapper, StyledHeader, StyledLink };
