interface Props {
  src: string;
  alt: string;
  paddingTop?: number;
  onLoad?: () => void;
  hasPointerOnImage?: boolean;
  onClick?: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
}

export type { Props };
