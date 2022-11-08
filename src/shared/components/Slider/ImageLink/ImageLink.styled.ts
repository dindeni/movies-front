import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  position: relative;
`;

const StyledNumber = styled.div`
  font-size: 32px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: ${({ theme: { colors } }) => `1px solid ${colors.gold}`};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export { StyledLink, StyledNumber };
