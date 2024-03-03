import React from 'react'
import './cart-item.styles.scss'
import { currencyFormat } from '../../utils/functions/currencyFormat'

const CartItem = ({ cartItemData }) => {
  const { name, price, quantity, imageUrl } = cartItemData
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x {currencyFormat(price)}
        </span>
      </div>
    </div>
  )
}

export default CartItem
