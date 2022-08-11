interface Trailer {
  name: string;
  key: string;
}

interface Props {
  trailers: Trailer[];
  isTablet: boolean;
}

interface SlideProps {
  trailer: Trailer;
  onPlayButtonClick: (key: string) => void;
}

interface VideoPopupProps {
  videoKey: string;
  onClose: () => void;
}

export type { Props, SlideProps, VideoPopupProps };
