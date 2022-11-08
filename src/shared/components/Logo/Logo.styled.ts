import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoText = styled.h1`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.white};
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { LogoText, LogoLink };
