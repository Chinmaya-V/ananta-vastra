import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.scss'
import { UserContextProvider } from './contexts/user.context'
import { ProductContextProvider } from './contexts/products.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
