import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.page'
import { Navigation } from './components'
import SignIn from './pages/sign-in/sign-in.page'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<div>{'I am Shopping Page'}</div>} />
          <Route path="contact" element={<div>{'I am Contact Page'}</div>} />
          <Route path="sign-in" element={<SignIn />} />
          {/* <Route path="temp" element={} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
