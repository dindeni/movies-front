import styled from 'styled-components';

import { Props } from './types';

const StyledButton = styled.button<{
  background: Props['background'];
  hasIconDone?: boolean;
}>`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme: { colors }, background }) =>
    background === 'gold' ? colors.text : colors.gold};
  background: ${({ background, theme: { colors } }) =>
    colors[background] || 'transparent'};
  border-radius: 40px;
  width: 100%;
  padding: 12px 0;
  border: ${({ theme: { colors }, background }) => {
    if (background === 'transparent') {
      return `1px solid ${colors.gold}`;
    }
    return 'none';
  }};
  cursor: pointer;
  display: flex;
  justify-content: center;
  
  & path {
    fill: ${({ theme: { colors }, background }) =>
      background === 'gold' ? colors.text : colors.gold};
  }
}

  :hover {
    ${({ background, theme: { colors } }) => {
      if (background === 'gold') {
        return `background: ${colors.secondaryGray};`;
      }
      if (background === 'transparent') {
        return `border: 1px solid ${colors.black};`;
      }
    }};
    color: ${({ theme: { colors }, background }) =>
      background === 'gold' ? colors.white : colors.black};
    
    & path {
      fill: ${({ theme: { colors }, background }) =>
        background === 'gold' ? colors.white : colors.black};
    }
  }

  :disabled {
    border: ${({ theme: { colors }, background }) => {
      if (background === 'transparent') {
        return `1px solid ${colors.lightGray};`;
      }
    }};
    color: ${({ theme: { colors } }) => colors.gold};

    & path {
      fill: ${({ theme: { colors } }) => colors.gold};
    }
}
`;

const ChildrenWrapper = styled.div`
  position: relative;
  width: max-content;
  display: flex;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: -32px;
`;

export { StyledButton, ChildrenWrapper, IconWrapper };
