import styled from 'styled-components';

import iconZoom from 'static/icons/icon-zoom.svg';

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 500px));
  grid-column-gap: 20px;
  color: ${({ theme: { colors } }) => colors.white};
  margin: 32px 0 0;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    grid-row-gap: 16px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const IconZoom = styled.div`
  width: 48px;
  height: 48px;
  background: url(${iconZoom}) no-repeat center;
  position: absolute;
  top: 0;
  right: 0;
`;

const TrailersWrapper = styled.div`
  margin-top: 16px;
`;

export { StyledArticle, ImageWrapper, IconZoom, TrailersWrapper };
