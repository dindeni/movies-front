interface SearchResult {
  id: number;
  imagePath: string;
  imageAlt: string;
  movieName: string;
  link: string;
}

interface Props {
  onChange: (searchText: string) => void;
  searchResults: SearchResult[];
  isSearchPopupShowing: boolean;
  hasError: boolean;
  clearSearchResults: () => void;
}

interface SearchResultPopupProps {
  searchResults: SearchResult[];
  onButtonCloseClick: () => void;
  onLinkClick: () => void;
  hasError: boolean;
  hasSearchText: boolean;
}

export type { Props, SearchResultPopupProps };
