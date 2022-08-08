import styled from 'styled-components';

import IconPlay from 'static/icons/icon-play-circle.svg';

const StyledWrapper = styled.div`
  position: relative;
  padding-top: 25px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const PlayButton = styled.button`
  width: 80px;
  height: 80px;
  background: url(${IconPlay}) no-repeat;
  background-size: 80px;
  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
    background-size: 60px;
  }
`;

const Caption = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 5px;
  color: ${({ theme: { colors } }) => colors.gold};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

export { StyledWrapper, ImageWrapper, PlayButton, Caption };
