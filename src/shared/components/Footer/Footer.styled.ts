import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: linear-gradient(
    ${({ theme: { colors } }) => `90deg, ${colors.secondaryGray} 38%, ${colors.text} 38%`}
  );
  width: 100%;

  @media (max-width: 900px) {
    background: linear-gradient(
      ${({ theme: { colors } }) =>
        `90deg, ${colors.secondaryGray} 42%, ${colors.text} 42%`}
    );
  }
`;

const StyledContent = styled.footer`
  display: grid;
  grid-template-columns: 38% auto;
  align-content: stretch;
  width: 70%;
  margin: 0 auto;
  min-height: 100px;

  @media (max-width: 900px) {
    width: 90%;
    grid-template-columns: 42% auto;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    margin-left: 10px;
  }
`;

const TmdbWrapper = styled.div`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 12px;
  line-height: 10px;
`;

const TmdbLogogWrapper = styled.div`
  width: 80px;
  margin-top: 5px;
`;

export {
  StyledFooter,
  StyledContent,
  LeftSide,
  RightSide,
  TmdbWrapper,
  TmdbLogogWrapper,
};
