import { FC, useState, PointerEvent } from 'react';
import { useViewport } from 'shared/hooks/useViewport';

import { ButtonHamburger } from './ButtonHamburger';
import { menuData } from './data';
import {
  StyledHeader,
  LogoText,
  LogoLink,
  StyledList,
  StyledItem,
  StyledNav,
  SubLinksWrapper,
  StyledSubLink,
} from './Header.styled';
import { MobileMenu } from './MobileMenu';
import { Props } from './types';

const MOBILE_BREAKPOINT = 450;

const Header: FC<Props> = ({ logoText }) => {
  const [hoveredItem, setHoveredItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useViewport();

  const handleStyledItemPointerEnter = (event: PointerEvent, value: string) => {
    setHoveredItem(value);
  };

  const handleStyledItemPointerLeave = (event) => {
    event.stopPropagation();
    setHoveredItem('');
  };

  const handleStyledNavPointerLeave = (event: PointerEvent) => {
    event.stopPropagation();
    const currentTarget = event.target as HTMLElement;
    if (currentTarget.tagName === 'NAV') {
      setHoveredItem('');
    }
  };

  const handleButtonHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menu = menuData.map(({ name, value, subItems }) => {
    return (
      <StyledItem
        onPointerEnter={(event) => handleStyledItemPointerEnter(event, value)}
        onPointerLeave={handleStyledItemPointerLeave}
        key={value}
      >
        {name}
        {((subItems && hoveredItem === value) || width < MOBILE_BREAKPOINT) && (
          <SubLinksWrapper>
            {subItems.map(({ name: subItemName, value: subItemValue, link }) => (
              <StyledSubLink key={subItemValue} to={link}>
                {subItemName}
              </StyledSubLink>
            ))}
          </SubLinksWrapper>
        )}
      </StyledItem>
    );
  });

  return (
    <StyledHeader>
      <LogoText>
        <LogoLink to="/">{logoText}</LogoLink>
      </LogoText>
      <StyledNav onPointerLeave={handleStyledNavPointerLeave}>
        <StyledList>{width > MOBILE_BREAKPOINT && menu}</StyledList>
        <MobileMenu isOpen={isMenuOpen}>
          <StyledList>{menu}</StyledList>
        </MobileMenu>
      </StyledNav>
      <ButtonHamburger isOpen={isMenuOpen} onClick={handleButtonHamburgerClick} />
    </StyledHeader>
  );
};

export { Header };
