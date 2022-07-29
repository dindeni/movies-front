import styled from 'styled-components';

const StyledWrapper = styled.div`
  background: ${({ theme: { colors } }) => colors.black};
  height: 100%;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  min-height: calc(100vh - 100px);
  width: 70%;
  margin: 0 auto;

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export { StyledWrapper, StyledMain };
