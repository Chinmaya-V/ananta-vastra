import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../checkout-item/checkout-item.component'
import './checkout.styles.scss'
import { currencyFormat } from '../../utils/functions/currencyFormat'

const CheckoutComponent = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems?.map((item, index) => {
        return <CheckoutItem key={`item-${index}`} item={item} />
      })}

      <span className="total">Total: {currencyFormat(cartTotal)}</span>
    </div>
  )
}

export default CheckoutComponent
