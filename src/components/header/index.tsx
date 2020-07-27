import React, { useState } from 'react'

import {
  HeaderWrapper,
  HeaderBar,
  HeaderNavBar,
  HeaderImgContainer,
  HeaderImg,
  HeaderMenuToggle,
  HeaderNav,
  HeaderNavItem,
  HeaderSearchInput,
} from './styles'

import logo from 'assets/cinema-logo.svg'

const headerNav = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now_playing',
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular',
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top_rated',
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming',
  },
]

const Header: React.FC = () => {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(active => (active = !active))
  }

  return (
    <>
      <HeaderWrapper>
        <HeaderBar />
        <HeaderNavBar>
          <HeaderImgContainer>
            <HeaderImg src={logo} alt='logo' />
          </HeaderImgContainer>
          <HeaderMenuToggle active={active} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </HeaderMenuToggle>
          <HeaderNav active={active}>
            {headerNav.map(navItem => (
              <HeaderNavItem key={navItem.id}>
                <span>
                  <i className={navItem.iconClass} />
                </span>
                &nbsp;
                <span>{navItem.name}</span>
              </HeaderNavItem>
            ))}
            <HeaderSearchInput placeholder='Search for a movie' type='text' />
          </HeaderNav>
        </HeaderNavBar>
      </HeaderWrapper>
    </>
  )
}

export default Header
