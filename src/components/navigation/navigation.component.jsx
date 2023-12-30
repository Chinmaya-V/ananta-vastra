import React from 'react'
import { Outlet } from 'react-router-dom'
import './navigation.styles.scss'

const NavigationBar = () => {
  return <div className="navigation-bar">Navbar</div>
}

const Navigation = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default Navigation
