import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.page'
import { Navigation } from './components'
import Authentication from './pages/authentication/auth.page'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<div>{'I am Shopping Page'}</div>} />
          <Route path="contact" element={<div>{'I am Contact Page'}</div>} />
          <Route path="auth" element={<Authentication />} />
          {/* <Route path="temp" element={} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
