import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutComponent = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div>
      {cartItems?.map((item) => {
        const { name, price, quantity } = item
        return (
          <div>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CheckoutComponent
