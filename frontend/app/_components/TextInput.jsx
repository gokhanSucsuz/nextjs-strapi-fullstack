import React from 'react'

const TextInput = ({ inputName, label, value, handleChange }) => {
    return (
        <div className='input__container'>
            <label htmlFor={inputName} className='copy'>
                {label}
            </label>
            <input
                type='text'
                className='input input__text input--beige'
                id={inputName}
                name={inputName}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextInput