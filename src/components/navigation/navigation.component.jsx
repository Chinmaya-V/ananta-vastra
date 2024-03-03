import React, { useState, useEffect, useContext } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './navigation.styles.scss'
import Logo from '../logo/logo.component'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../contexts/cart.context'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  const NavigationLinks = () => (
    <>
      <NavLink to={'/shop'} className={'nav-link'}>
        {'Shop'}
      </NavLink>
      <NavLink to={'/contact'} className={'nav-link'}>
        {'Contact'}
      </NavLink>
      {!currentUser ? (
        <NavLink to={'/auth'} className={'nav-link'}>
          {'Sign In'}
        </NavLink>
      ) : (
        <NavLink to={'/auth'} className={'nav-link'} onClick={signOutUser}>
          {'Sign Out'}
        </NavLink>
      )}
    </>
  )
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className="navigation-bar">
        <NavLink to={'/'}>
          <Logo />
        </NavLink>
        {!isMobile && (
          <div className="nav-links-container">
            <NavigationLinks />
            <CartIcon />
          </div>
        )}
        {isMobile && isMenuOpen && (
          <div className="mobile-menu">
            <NavigationLinks />
            <CartIcon />
          </div>
        )}
        <div
          className={`mobile-menu-icon ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      {isCartOpen && <CartDropdown />}
    </>
  )
}

const Navigation = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
}

export default Navigation
