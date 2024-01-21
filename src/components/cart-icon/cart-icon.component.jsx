import React from 'react'
import SvgCheckoutBag from '../../assets/svg/checkout-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <SvgCheckoutBag size="24px" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon
