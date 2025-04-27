import { createContext, useState } from 'react'
import { SHOP_DATA } from '../mockData/shop-data.js'
export const ProductContext = createContext({
  products: [],
})

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA)

  const value = { products }

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
