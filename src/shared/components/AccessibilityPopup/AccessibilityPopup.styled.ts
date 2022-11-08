import styled from 'styled-components';

const StyledSection = styled.section`
  min-width: 200px;
  max-width: 500px;
  height: 200px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;
  background: ${({ theme }) => theme.colors.gradientGold90deg};
  border-radius: 6px;
  padding: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    max-width: calc(100% - 40px);
  }
`;

const StyledMessage = styled.p`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 18px;
  font-weight: 600;
`;

export { StyledSection, StyledMessage };
