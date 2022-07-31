interface Slide {
  id: number;
  imagePath: string;
  imageAlt: string;
  link: string;
}

interface Props {
  slidesKind: 'daily' | 'weekly';
  slides: Slide[];
  preventOnLoadImage?: boolean;
}

export type { Props, Slide };
