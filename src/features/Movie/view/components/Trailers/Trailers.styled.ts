import styled, { css } from 'styled-components';

import IconNext from 'static/icons/icon-next.svg';

const StyledSection = styled.section`
  display: grid;
  grid-row-gap: 16px;
`;

const StyledHeader = styled.h3`
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme: { colors } }) => colors.white};
  margin: 0;
`;

const SlideWrapper = styled.div`
  padding: 0 40px;
  overflow-x: hidden;
  position: relative;

  & .swiper-wrapper {
    column-gap: 16px;
  }
`;

const ButtonControl = styled.button<{ isPrev?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  margin: auto 0;
  width: 35px;
  height: 100%;
  background: none;
  border: ${({ theme: { colors } }) => `1px solid ${colors.gold}`};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ isPrev }) => {
    if (isPrev) {
      return css`
        left: 0;
      `;
    } else {
      return css`
        right: 0;
      `;
    }
  }};
  
  :disabled {
    border: ${({ theme: { colors } }) => `1px solid ${colors.gold}33`};
    cursor: auto;
    
    ::before {
      opacity: 0.2;
    }
  }
  
  :hover:not(:disabled) {
  background: ${({ theme: { colors } }) => colors.blackGray}
}

  ::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: url(${IconNext});
    ${({ isPrev }) => {
      if (isPrev) {
        return css`
          transform: rotate(180deg);
        `;
      }
    }}
`;

const StyledMessage = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.white};
`;

export { StyledSection, StyledHeader, SlideWrapper, ButtonControl, StyledMessage };
