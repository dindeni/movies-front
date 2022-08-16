import { FC } from 'react';

import { IMAGE_BASE_URL } from 'shared/constants/api';

import {
  StyledWrapper,
  StyledHeader,
  StyledDescription,
  TextItem,
  CompaniesList,
  CompanyItem,
  CompanyName,
  StyledLink,
} from './AboutMovie.styled';
import { Props } from './types';

const AboutMovie: FC<Props> = ({
  name,
  overview,
  releaseDate,
  productionCompanies,
  genres,
  homepage,
}) => {
  const reformatDate = (transformedDate: string) => {
    const date = new Date(transformedDate);
    const locale = date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
    return `${locale}`;
  };

  const companies = productionCompanies.map(({ name, logo_path, id }) => (
    <CompanyItem key={id}>
      {logo_path ? (
        <img
          src={`${IMAGE_BASE_URL}/w200${logo_path}`}
          alt={`logo ${name.toLowerCase()}`}
          width={80}
        />
      ) : (
        <CompanyName>{name}</CompanyName>
      )}
    </CompanyItem>
  ));

  return (
    <StyledWrapper>
      <StyledHeader>{`${name}(${new Date(releaseDate).getFullYear()})`}</StyledHeader>
      {overview && <StyledDescription>{overview}</StyledDescription>}
      <TextItem>{`Release - ${reformatDate(releaseDate)}`}</TextItem>
      <TextItem>{`Genres - ${genres}`}</TextItem>
      {homepage && (
        <StyledLink href={homepage} target="_blank" rel="noopener noreferrer">
          Go to movie homepage
        </StyledLink>
      )}
      {productionCompanies.length > 0 && <CompaniesList>{companies}</CompaniesList>}
    </StyledWrapper>
  );
};

export { AboutMovie };
