import React from 'react'
import styles  from './Feild.module.scss'

const Feild = ({placeholder, value, onChange, type ='text',required}) => {
  return (
    <input 
    placeholder={placeholder}
    type={type} 
    value={value}
    onChange={onChange} 
    className={styles.input}
    required={required}
    />
  )
}

export default Feild