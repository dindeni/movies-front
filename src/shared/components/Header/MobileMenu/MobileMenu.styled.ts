import styled from 'styled-components';

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  opacity: 0;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.secondaryGray};
  padding: 15px;

  @media (min-width: 450px) {
    display: none;
  }
`;

export { MobileMenuWrapper };
