import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutComponent = () => {
  const { cartItems, addItemToCart, reduceItemFromCart, removeItem } = useContext(CartContext)

  return (
    <div>
      {cartItems?.map((item) => {
        const { name, price, quantity } = item
        return (
          <div>
            <p>{name}</p>
            <span>
              <p onClick={() => reduceItemFromCart(item)}>{'-'}</p>
              <p>{quantity}</p>
              <p onClick={() => addItemToCart(item)}>{'+'}</p>
            </span>
            <p>{price}</p>
            <p onClick={() => removeItem(item.id)}>Remove All</p>
          </div>
        )
      })}
    </div>
  )
}

export default CheckoutComponent
