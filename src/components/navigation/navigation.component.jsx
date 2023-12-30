import React from 'react'
import { Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import Logo from '../logo/logo.component'

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div>
        <Logo />
      </div>
    </div>
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
