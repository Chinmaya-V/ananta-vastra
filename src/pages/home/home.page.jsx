import React from 'react'
import { Outlet } from 'react-router-dom'
import { Categories } from '../../components'

const Home = () => {
  return (
    <>
      <Categories />
      <Outlet />
    </>
  )
}

export default Home
