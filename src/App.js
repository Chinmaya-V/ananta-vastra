import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.page'
import { Navigation } from './components'
import Authentication from './pages/authentication/auth.page'
import Shop from './pages/shop/shop.page'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop/>} />
          <Route path="contact" element={<div>{'I am Contact Page'}</div>} />
          <Route path="auth" element={<Authentication />} />
          {/* <Route path="temp" element={} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
