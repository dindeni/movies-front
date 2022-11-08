import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';

import { debounce } from 'shared/helpers/debounce';

import { StyledWrapper, IconSearch, InputWrapper, StyledInput } from './Search.styled';
import { SearchResultPopup } from './SearchResultPopup';
import { Props } from './types';

const Search: FC<Props> = ({
  onChange,
  searchResults,
  clearSearchResults,
  isSearchPopupShowing,
  hasError,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isSearchPopupShowing) {
      setIsPopupOpen(true);
    }
  }, [isSearchPopupShowing]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const debouncedOnChange = useMemo(
    () => debounce<string>((value) => onChange(value), 500),
    [],
  );

  useEffect(() => {
    debouncedOnChange(inputValue);
  }, [inputValue]);

  const handleButtonCloseClick = () => {
    setIsPopupOpen(!isPopupOpen);
    clearSearchResults();
    setInputValue('');
  };

  const handleLinkClick = () => {
    setIsPopupOpen(false);
    clearSearchResults();
  };

  return (
    <StyledWrapper>
      <InputWrapper>
        <StyledInput
          onChange={handleInputChange}
          value={inputValue}
          placeholder="search"
        />
        <IconSearch />
      </InputWrapper>
      {isPopupOpen && (
        <SearchResultPopup
          searchResults={searchResults}
          onButtonCloseClick={handleButtonCloseClick}
          onLinkClick={handleLinkClick}
          hasError={hasError}
          hasSearchText={!!inputValue}
        />
      )}
    </StyledWrapper>
  );
};

export { Search };
