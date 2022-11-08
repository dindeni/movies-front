interface Props {
  logoText: string;
  onMobileMenuChange: (isOpen: boolean) => void;
}

interface MenuItem {
  name: string;
  value: string;
  subItems: {
    name: string;
    value: string;
    link: string;
  }[];
  link?: string;
}

type MenuData = MenuItem[];

export type { Props, MenuData };
