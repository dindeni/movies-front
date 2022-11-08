interface Slide {
  id: number;
  imageAlt: string;
  imagePath: string;
  link: string;
}

interface Props {
  slides: Slide[];
  preventOnLoadImage?: boolean;
}

interface ImageProps extends Slide {
  slideNumber: number;
  preventOnLoadImage?: boolean;
}

export type { Props, ImageProps };
