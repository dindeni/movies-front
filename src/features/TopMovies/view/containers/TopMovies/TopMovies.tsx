import { FC, useEffect, useState, useMemo } from 'react';

import { getTrending } from 'core/reduxSlices/trending/thunks';
import { useAppSelector, useAppDispatch } from 'core/store';
import { IMAGE_BASE_URL } from 'shared/constants/api';
import { MOBILE_BREAKPOINT } from 'shared/constants/breakpoints';
import { useViewport } from 'shared/hooks/useViewport';
import { TrendingItem } from 'shared/types/redux';

import { Catalog } from '../../components/Catalog';
import { Movie } from '../../components/Catalog/types';
import { Props } from './types';

const MOBILE_IMAGE_WIDTH = 200;
const DESKTOP_IMAGE_WIDTH = 500;

const TopMovies: FC<Props> = ({ movieKind }) => {
  const { dailyData, dailyStatus, weeklyData, weeklyStatus, page } = useAppSelector(
    (state) => state.trending,
  );
  const dispatch = useAppDispatch();
  const { width } = useViewport();
  const [movies, setMovies] = useState<Movie[]>([]);
  const isMovieStatusSuccess = useMemo(
    () => (movieKind === 'day' ? dailyStatus === 'success' : weeklyStatus === 'success'),
    [dailyStatus, weeklyStatus],
  );
  const [isRendered, setIsRendered] = useState(false);

  const movie = movieKind === 'day' ? dailyData : weeklyData;

  const getCatalogDataFromState = (trendingItem: TrendingItem) =>
    trendingItem.results.map(({ id, poster_path, title }) => ({
      id,
      imagePath: `${IMAGE_BASE_URL}/w${
        width < MOBILE_BREAKPOINT ? MOBILE_IMAGE_WIDTH : DESKTOP_IMAGE_WIDTH
      }/${poster_path}`,
      imageAlt: `image - ${title.toLowerCase()}`,
      link: `/movie/${id}`,
    }));

  const callTrendingDispatch = (page: number) => {
    const isFirstPageOrLessTotalPages =
      page === 1 || (movie.totalPages && page <= movie.totalPages);
    if (isFirstPageOrLessTotalPages) {
      dispatch(getTrending({ timePeriod: movieKind, page }));
    }
  };

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (movie.results.length === 0 && movies.length === 0) {
      callTrendingDispatch(1);
    }
    if (isMovieStatusSuccess && isRendered) {
      setMovies((prev) => [...prev, ...getCatalogDataFromState(movie)]);
    }
  }, [page, isMovieStatusSuccess, isRendered]);

  useEffect(() => {
    if (movies.length > 0) {
      setMovies([]);
      callTrendingDispatch(1);
    }
  }, [movieKind]);

  const handleCatalogIntersected = () => {
    callTrendingDispatch(page + 1);
  };

  return (
    <>
      <Catalog
        movies={movies}
        onIntersected={handleCatalogIntersected}
        isLoaded={isMovieStatusSuccess}
        header={`${movieKind === 'day' ? 'Daily' : 'Weekly'} top`}
      />
    </>
  );
};

export { TopMovies };
