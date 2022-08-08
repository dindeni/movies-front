import styled, { css } from 'styled-components';

const ImageWrapper = styled.div<{ paddingTop?: number }>`
  padding-top: ${({ paddingTop }) => `${paddingTop}%`};
  position: relative;
  background: ${({ theme: { colors } }) => `${colors.gradientBlack}`};
`;

const StyledImage = styled.img<{ hasPointer?: boolean }>`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  ${({ hasPointer }) => {
    if (hasPointer) {
      return css`
        cursor: pointer;
      `;
    }
  }};
`;

export { ImageWrapper, StyledImage };
