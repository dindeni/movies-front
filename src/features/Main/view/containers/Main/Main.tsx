import { FC, useEffect, useMemo } from 'react';

import { getDailyTrending } from 'core/reduxSlices/trending/thunks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { IMAGE_BASE_URL } from 'shared/constants/api';
import { useViewport } from 'shared/hooks/useViewport';

import { TopMovies } from '../../components/TopMovies';
import { defaultSlidesData } from './data';
import { Props } from './types';

const MOBILE_IMAGE_WIDTH = 200;
const DESKTOP_IMAGE_WIDTH = 500;

const Main: FC<Props> = ({ preventOnLoadImage }) => {
  const dispatch = useAppDispatch();
  const { isMobileWidth } = useViewport();

  const trending = useAppSelector((state) => state.trending);

  const sliderDailyTopData = useMemo(() => {
    const topTen = trending.dailyData.results?.slice(0, 10);
    return topTen?.map(({ poster_path, title, id }) => ({
      id,
      imagePath: `${IMAGE_BASE_URL}/w${
        isMobileWidth ? MOBILE_IMAGE_WIDTH : DESKTOP_IMAGE_WIDTH
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
        isMobileWidth ? MOBILE_IMAGE_WIDTH : DESKTOP_IMAGE_WIDTH
      }/${poster_path}`,
      imageAlt: `image - ${title.toLowerCase()}`,
      link: `/movie/${id}`,
    }));
  }, [trending.weeklyData]);

  useEffect(() => {
    if (trending.dailyStatus !== 'success') {
      dispatch(getDailyTrending({ timePeriod: 'day', page: 1 }));
    }
    if (trending.dailyStatus !== 'success') {
      dispatch(getDailyTrending({ timePeriod: 'week', page: 1 }));
    }
  }, []);

  return (
    <>
      <TopMovies
        slidesKind="daily"
        slides={sliderDailyTopData.length > 0 ? sliderDailyTopData : defaultSlidesData}
        preventOnLoadImage={preventOnLoadImage}
      />
      <TopMovies
        slidesKind="weekly"
        slides={sliderWeeklyTopData.length > 0 ? sliderWeeklyTopData : defaultSlidesData}
        preventOnLoadImage={preventOnLoadImage}
      />
    </>
  );
};

export { Main };
