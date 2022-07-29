interface Slide {
  id: number;
  imagePath: string;
  imageAlt: string;
  link: string;
}

interface Props {
  slides: Slide[];
  preventOnLoadImage?: boolean;
}

export type { Props, Slide };
