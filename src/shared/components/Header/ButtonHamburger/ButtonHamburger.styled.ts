import styled from 'styled-components';

const StyledButton = styled.button<{ isOpen: boolean }>`
  background: none;
  border: none;
  width: 20px;
  height: 15px;
  margin-left: auto;
  display: none;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${({ theme: { colors } }) => colors.white};
    top: var(--top-before);
    left: 0;
    transform: rotate(var(--rotate-before));
    opacity: var(--opacity);
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${({ theme: { colors } }) => colors.white};
    bottom: var(--bottom-after);
    left: 0;
    transform: rotate(var(--rotate-after));
    opacity: var(--opacity);
  }

  @media (max-width: 450px) {
    display: block;
  }
`;

export { StyledButton };
