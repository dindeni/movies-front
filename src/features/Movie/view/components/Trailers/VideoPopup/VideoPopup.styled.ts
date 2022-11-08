import styled from 'styled-components';

import IconClose from '/static/icons/icon-close-rounded.svg';

const StyledWrapper = styled.div<{ isLoaded: boolean }>`
  position: fixed;
  width: 0;
  height: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: ${({ theme: { colors }, isLoaded }) =>
    isLoaded ? 'none' : `1px solid ${colors.gold}`};
  border-radius: 12px;
  z-index: 100;
  background: ${({ theme: { colors } }) => colors.secondaryGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoWrapper = styled.div`
  opacity: 0;
  width: 100%;
  position: relative;
`;

const ButtonClose = styled.button`
  border: none;
  background: url(${IconClose}) no-repeat;
  background-size: 48px;
  position: absolute;
  width: 48px;
  height: 48px;
  top: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export { StyledWrapper, VideoWrapper, ButtonClose, LoaderWrapper };
