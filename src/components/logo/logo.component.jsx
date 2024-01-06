import React from 'react'
import './logo.styles.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img alt="logoAV" src={`${process.env.PUBLIC_URL}/logos/logoAV.png`} />
      <h3 className="logo-text">AnantaVastra</h3>
    </div>
  )
}

export default Logo
