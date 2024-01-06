import React from 'react'
import CategoryItem from './categoryItem/category-item.component'
import { CATEGORIES } from '../../utils/constants/categories.constants'
import './categories.styles.scss'

const Categories = () => {
  return (
    <div className="categories-container">
      {CATEGORIES.map(({ id, title, imageURL }) => (
        <CategoryItem key={`categoryID-${id}`} title={title} imageURL={imageURL} />
      ))}
    </div>
  )
}

export default Categories
