import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss'
import CancelSvg from '../../assets/svg/cancel.svg'
import { currencyFormat } from '../../utils/functions/currencyFormat'

const CheckoutItem = ({ item }) => {
  const { addItemToCart, reduceItemFromCart, removeItem } = useContext(CartContext)
  const { name, price, quantity, imageUrl } = item
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItemFromCart(item)}>
          {'-'}
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          {'+'}
        </div>
      </span>
      <span className="price">{currencyFormat(price)}</span>
      <span className="remove-button" onClick={() => removeItem(item.id)}>
        <CancelSvg />
      </span>
    </div>
  )
}

export default CheckoutItem
