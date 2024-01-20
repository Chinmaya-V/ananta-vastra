import React from 'react'
import Button from '../buttons/button.component'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  return (
    <div className="product-card-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{`${Number(price).toLocaleString('en-IN', {
          maximumFractionDigits: 2,
          style: 'currency',
          currency: 'INR',
        })}`}</span>
      </div>
      <Button buttonType={'inverted'}>Add to card</Button>
    </div>
  )
}

export default ProductCard
