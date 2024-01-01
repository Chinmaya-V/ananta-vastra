import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './navigation.styles.scss'
import Logo from '../logo/logo.component'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const NAVIGATION_LINKS = [
    { path: '/shop', label: 'Shop' },
    { path: '/contact', label: 'Contact' },
    { path: '/sign-in', label: 'Sign In' },
  ]

  const NavigationLinks = () => (
    <>
      {NAVIGATION_LINKS.map((item, index) => (
        <NavLink key={`nav-link-${index}`} to={item.path} className={'nav-link'}>
          {item.label}
        </NavLink>
      ))}
    </>
  )
  return (
    <React.Fragment>
      <div className="navigation-bar">
        <NavLink to={'/'}>
          <Logo />
        </NavLink>
        {!isMenuOpen ? (
          <div className="nav-links-container">
            <NavigationLinks />
          </div>
        ) : (
          <>
            {isMenuOpen && (
              <div className="mobile-menu">
                <NavigationLinks />
              </div>
            )}
          </>
        )}
        <div className={`mobile-menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen((prev) => !prev)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

const Navigation = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Outlet />
    </React.Fragment>
  )
}

export default Navigation
