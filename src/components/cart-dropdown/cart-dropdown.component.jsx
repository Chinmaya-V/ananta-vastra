import React, { useContext } from 'react'
import Button from '../buttons/button.component'
import './cart-dropdown.styles.scss'
import CancelSvg from '../../assets/svg/cancel.svg'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-cancel" onClick={() => setIsCartOpen(false)}>
        <CancelSvg />
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItemData={item} />
        ))}
      </div>
      <Button>{'Go to Checkout'}</Button>
    </div>
  )
}

export default CartDropdown
