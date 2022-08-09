import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  grid-template-rows: repeat(auto-fill, minmax(0, min-content));
`;

const StyledHeader = styled.h2`
  margin: 0;
  font-size: 32px;
  line-height: 28px;
  font-weight: 700;
`;

const StyledDescription = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  margin: 0;
`;

const TextItem = styled.div`
  font-size: 16px;
  line-height: 14px;
`;

const CompaniesList = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  background: ${({ theme: { colors } }) => colors.gold};
  border-radius: 12px;
  width: 100%;
`;

const CompanyItem = styled.li`
  list-style: none;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

const CompanyName = styled.div`
  grid-row-start: 2;
  color: ${({ theme: { colors } }) => colors.text};
  align-self: center;
  white-space: nowrap;
`;

const StyledLink = styled.a`
  text-decoration: none;
  border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.gold}`};
  width: max-content;
`;

export {
  StyledWrapper,
  StyledHeader,
  StyledDescription,
  TextItem,
  CompaniesList,
  CompanyItem,
  CompanyName,
  StyledLink,
};
