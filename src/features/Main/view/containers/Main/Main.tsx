import { FC, useEffect, useMemo } from 'react';

import { getTrending } from 'core/reduxSlices/trending/thunks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { IMAGE_BASE_URL } from 'shared/constants/api';
import { MOBILE_BREAKPOINT } from 'shared/constants/breakpoints';
import { useViewport } from 'shared/hooks/useViewport';

import { TopMovies } from '../../components/TopMovies';
import { defaultSlidesData } from './data';
import { Props } from './types';

const MOBILE_IMAGE_WIDTH = 200;
const DESKTOP_IMAGE_WIDTH = 500;

const Main: FC<Props> = ({ preventOnLoadImage }) => {
  const dispatch = useAppDispatch();
  const { width } = useViewport();

  const trending = useAppSelector((state) => state.trending);

  const sliderDailyTopData = useMemo(() => {
    const topTen = trending.dailyData.results?.slice(0, 10);
    return topTen?.map(({ poster_path, title, id }) => ({
      id,
      imagePath: `${IMAGE_BASE_URL}/w${
        width < MOBILE_BREAKPOINT ? MOBILE_IMAGE_WIDTH : DESKTOP_IMAGE_WIDTH
      }/${poster_path}`,
      imageAlt: `image - ${title.toLowerCase()}`,
      link: `/movie/${id}`,
    }));
  }, [trending.dailyData]);

  const sliderWeeklyTopData = useMemo(() => {
    const topTen = trending.weeklyData.results?.slice(0, 10);
    return topTen?.map(({ poster_path, title, id }) => ({
      id,
      imagePath: `${IMAGE_BASE_URL}/w${
        width < MOBILE_BREAKPOINT ? MOBILE_IMAGE_WIDTH : DESKTOP_IMAGE_WIDTH
      }/${poster_path}`,
      imageAlt: `image - ${title.toLowerCase()}`,
      link: `/movie/${id}`,
    }));
  }, [trending.weeklyData]);

  useEffect(() => {
    if (trending.dailyStatus !== 'success' || trending.page !== 1) {
      dispatch(getTrending({ timePeriod: 'day', page: 1 }));
    }
    if (trending.dailyStatus !== 'success' || trending.page !== 1) {
      dispatch(getTrending({ timePeriod: 'week', page: 1 }));
    }
  }, []);

  return (
    <>
      <TopMovies
        slidesKind="daily"
        slides={
          sliderDailyTopData.length > 0 && trending.page === 1
            ? sliderDailyTopData
            : defaultSlidesData
        }
        preventOnLoadImage={preventOnLoadImage}
      />
      <TopMovies
        slidesKind="weekly"
        slides={
          sliderWeeklyTopData.length > 0 && trending.page === 1
            ? sliderWeeklyTopData
            : defaultSlidesData
        }
        preventOnLoadImage={preventOnLoadImage}
      />
    </>
  );
};

export { Main };
