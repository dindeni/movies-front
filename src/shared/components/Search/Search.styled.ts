import styled from 'styled-components';

import iconSearch from 'static/icons/icon-search.svg';

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: ${({ theme: { colors } }) => `1px solid ${colors.baseBlack}`};
  background: ${({ theme: { colors } }) => colors.blackGray};
  color: ${({ theme: { colors } }) => colors.lightText};
  font-size: 20px;
  line-height: 24px;
  padding: 16px 48px 16px 16px;
  display: flex;
  align-items: center;

  :focus-visible {
    outline: none;
    border-color: ${({ theme: { colors } }) => colors.gold};
  }
`;

const IconSearch = styled.div`
  width: 24px;
  height: 100%;
  background: url(${iconSearch}) no-repeat center;
  position: absolute;
  right: 16px;
  top: 0;
`;

export { StyledWrapper, InputWrapper, StyledInput, IconSearch };
