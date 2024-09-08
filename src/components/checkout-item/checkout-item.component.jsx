import React from 'react'

const CheckoutItem = ({name, quantity, price, item}) => {
  const { cartItems, addItemToCart, reduceItemFromCart, removeItem } = useContext(CartContext)
  return (
    <div>
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
    </div>
  )
}

export default CheckoutItem
