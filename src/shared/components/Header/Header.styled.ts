import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 70%;
  min-height: 100px;
  margin: auto;
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    width: 90%;
  }
`;

const LogoText = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 48px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.white};
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const StyledNav = styled.nav`
  margin-left: 50px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 48px;

  @media (max-width: 450px) {
    flex-direction: column;
    row-gap: 24px;
  }
`;

const SubLinksWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  display: flex;

  @media (max-width: 450px) {
    margin-left: 15px;
  }
`;

const StyledSubLink = styled(Link)`
  margin-right: 20px;
  font-size: 16px;
  line-height: 32px;
  text-decoration: none;
  position: relative;

  :hover {
    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background: ${({ theme: { colors } }) => colors.gold};
      bottom: 3px;
    }
  }

  @media (max-width: 450px) {
    position: relative;

    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background: ${({ theme: { colors } }) => colors.gold};
      bottom: 0;
    }
  }
`;

const StyledItem = styled.li`
  color: ${({ theme: { colors } }) => colors.disable};
  list-style: none;
  cursor: pointer;
  padding: 20px 0;
  position: relative;

  :hover {
    @media (min-width: 450px) {
      ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${({ theme: { colors } }) => colors.gold};
        bottom: 15px;
      }
    }
  }
`;

export {
  StyledHeader,
  LogoText,
  LogoLink,
  StyledNav,
  StyledList,
  StyledItem,
  StyledSubLink,
  SubLinksWrapper,
};
