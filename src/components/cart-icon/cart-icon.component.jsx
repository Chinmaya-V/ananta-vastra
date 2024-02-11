import React, { useContext } from 'react'
import SvgCheckoutBag from '../../assets/svg/checkout-bag.svg'
import './cart-icon.styles.scss'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext)
  return (
    <div className="cart-icon-container" onClick={() => setIsCartOpen((prev) => !prev)}>
      <SvgCheckoutBag size="24px" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon
