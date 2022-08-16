import { FC, useEffect, useState, useMemo } from 'react';

import { clearSearchResults } from 'core/reduxSlices/search/reducer';
import { searchMovie } from 'core/reduxSlices/search/thunks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { IMAGE_BASE_URL } from 'shared/constants/api';

import { Search } from '../../components/Search';

const SearchContainer: FC = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useAppDispatch();

  const {
    status,
    movies: { results },
  } = useAppSelector((state) => state.search);

  const searchResults = useMemo(
    () =>
      results.map(({ id, poster_path, title }) => ({
        id,
        imagePath: `${IMAGE_BASE_URL}/w200/${poster_path}`,
        imageAlt: `image - ${title.toLowerCase()}`,
        movieName: title,
        link: `/movie/${id}`,
      })),
    [results],
  );

  useEffect(() => {
    if (searchText) {
      dispatch(searchMovie({ page: 1, query: searchText }));
    }
  }, [searchText]);

  const handleSearchChange = (value: string) => {
    setSearchText(value);
  };

  const handleSearchClearSearchResults = () => {
    dispatch(clearSearchResults());
  };

  return (
    <Search
      onChange={handleSearchChange}
      searchResults={searchResults}
      isSearchPopupShowing={status === 'success' || status === 'error'}
      hasError={status === 'error'}
      clearSearchResults={handleSearchClearSearchResults}
    />
  );
};

export { SearchContainer };
