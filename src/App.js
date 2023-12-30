import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.page'
import Navigation from './components/navigation/navigation.component'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
