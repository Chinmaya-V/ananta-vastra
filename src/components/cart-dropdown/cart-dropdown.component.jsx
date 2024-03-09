import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../buttons/button.component'
import './cart-dropdown.styles.scss'
import CancelSvg from '../../assets/svg/cancel.svg'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  const handleCheckout = () => {
    navigate('/checkout')
    setIsCartOpen(false)
  }
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
      <Button onClick={handleCheckout}>{'Go to Checkout'}</Button>
    </div>
  )
}

export default CartDropdown
