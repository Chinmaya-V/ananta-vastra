import React, { useContext } from 'react'
import Button from '../buttons/button.component'
import './product-card.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import { currencyFormat } from '../../utils/functions/currencyFormat'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)
  return (
    <div className="product-card-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{currencyFormat(price)}</span>
      </div>
      <Button buttonType={'inverted'} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  )
}

export default ProductCard
