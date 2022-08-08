import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;

const StyledCircle = styled.div`
  position: absolute;
  width: 112px;
  height: 112px;
  border: ${({ theme: { colors } }) => `8px solid ${colors.white}`};
  border-radius: 50%;
  border-color: ${({ theme: { colors } }) => colors.white} transparent transparent
    transparent;
  animation: ${rotateAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  :nth-child(1) {
    animation-delay: -0.45s;
  }

  :nth-child(2) {
    animation-delay: -0.3s;
  }

  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export { StyledLoader, StyledCircle };
