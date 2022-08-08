import { FC, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'core/store';
import { getMovieDescription } from 'features/Movie/redux/thunks';
import { Genre } from 'shared/types/redux';

import { MainContent } from '../MainContent/MainContent';

const MovieDescription: FC = () => {
  const dispatch = useAppDispatch();
  const {
    movie: { movieDescription, videos },
  } = useAppSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getMovieDescription({ id: parseInt(id) }));
    }
  }, []);

  const getGenresFromArray = (genres?: Genre[]) => {
    return genres?.map(({ name }) => name.toLowerCase()).join(', ') || '';
  };

  const trailers = useMemo(
    () =>
      videos
        .filter(({ type }) => type === 'Trailer')
        .map(({ key, name }) => ({
          key,
          name,
        })),
    [videos],
  );

  const genres = useMemo(
    () => getGenresFromArray(movieDescription?.genres),
    [movieDescription?.genres],
  );

  return (
    <>
      {movieDescription && (
        <MainContent
          name={movieDescription?.title}
          posterPath={movieDescription.poster_path}
          releaseDate={movieDescription.release_date}
          overview={movieDescription.overview}
          productionCompanies={movieDescription.production_companies}
          genres={genres}
          homepage={movieDescription.homepage}
          trailers={trailers}
        />
      )}
    </>
  );
};

export { MovieDescription };
