import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss'
import CancelSvg from '../../assets/svg/cancel.svg'

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
        <p onClick={() => reduceItemFromCart(item)}>{'-'}</p>
        <p>{quantity}</p>
        <p onClick={() => addItemToCart(item)}>{'+'}</p>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItem(item.id)}>
        <CancelSvg />
      </span>
    </div>
  )
}

export default CheckoutItem
