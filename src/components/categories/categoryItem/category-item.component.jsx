import React from 'react'
import './category-item.styles.scss'

const CategoryItem = ({ title, imageURL }) => {
  return (
    <div className="category-container">
      <img className="background-image" alt={`${title}-category-pic`} src={imageURL} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default CategoryItem
