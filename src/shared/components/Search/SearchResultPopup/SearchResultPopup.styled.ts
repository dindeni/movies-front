import { Link } from 'react-router-dom';
import styled from 'styled-components';

import buttonClose from 'static/icons/icon-close-squared.svg';

const StyledWrapper = styled.div`
  position: absolute;
  top: 74px;
  left: 0;
  padding: 48px;
  width: 100%;
  height: max-content;
  max-height: 0;
  border-radius: 8px 8px 0 0;
  background: ${({ theme: { colors } }) => colors.blackGray};
  z-index: 100;
  overflow-y: scroll;
  color: ${({ theme: { colors } }) => colors.lightText};

  @media (max-width: 450px) {
    padding: 16px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledItem = styled.li`
  list-style: none;
  padding: 8px 0;
`;

const StyledImage = styled.img`
  margin-right: 32px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ButtonClose = styled.button`
  border: none;
  cursor: pointer;
  padding: 16px;
  position: absolute;
  background: url(${buttonClose}) no-repeat;
  width: 32px;
  height: 32px;
  top: 16px;
  right: 16px;
`;

export { StyledWrapper, StyledList, StyledItem, StyledImage, StyledLink, ButtonClose };
