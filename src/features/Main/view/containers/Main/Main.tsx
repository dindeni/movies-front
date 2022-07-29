import { FC, useEffect, useMemo } from 'react';

import { getTrending } from 'core/reduxSlices/trending/thunks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { IMAGE_BASE_URL } from 'shared/constants/api';

import { DailyTop } from '../../components/DailyTop';
import { Props } from './types';

const Main: FC<Props> = ({ preventOnLoadImage }) => {
  const dispatch = useAppDispatch();

  const trending = useAppSelector((state) => state.trending);

  const sliderDailyTopData = useMemo(() => {
    const topTen = trending.data.results?.slice(0, 10);
    return topTen?.map(({ poster_path, title, id }) => ({
      id,
      imagePath: `${IMAGE_BASE_URL}/w300/${poster_path}`,
      imageAlt: `image - ${title.toLowerCase()}`,
      link: `/movie/${id}`,
    }));
  }, [trending]);

  useEffect(() => {
    dispatch(getTrending({ timePeriod: 'day', page: 1 }));
  }, []);

  return (
    <>
      <DailyTop slides={sliderDailyTopData} preventOnLoadImage={preventOnLoadImage} />
    </>
  );
};

export { Main };
