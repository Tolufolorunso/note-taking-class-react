import React from 'react'

function Input({label,name,type,value,handleChange}) {
  return (
    <div className="register__form-wrapper">
            <label htmlFor={name} className="float-label">
              {label}
            </label>
            <input
              className="register__form-input"
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              id={name}
            />
    </div>
  )
}

export default Input