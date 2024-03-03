import React from 'react'
import './form-input.styles.scss'
const FormInput = ({ type, label, name, value, onChange, ...otherProps }) => {
  return (
    <div className="input-group">
      {label && (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      )}
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
      
    </div>
  )
}

export default FormInput
