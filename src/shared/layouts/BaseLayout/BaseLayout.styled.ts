import styled from 'styled-components';

const StyledWrapper = styled.div<{ height: number }>`
  background: ${({ theme: { colors } }) => colors.black};
  height: 100%;
  min-height: ${({ height }) => (height ? `${height}px` : '100vh')};
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding-top: 100px;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.black};
  z-index: 100;
`;

const StyledMain = styled.main`
  width: 70%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const FooterWrapper = styled.div`
  margin-top: 64px;
  grid-row: 3;
`;

export { StyledWrapper, HeaderWrapper, StyledMain, FooterWrapper };
