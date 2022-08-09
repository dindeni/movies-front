import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export { LogoText, LogoLink };

