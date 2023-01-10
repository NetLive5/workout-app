import React from 'react'
import styles  from './Feild.module.scss'

const Feild = ({placeholder, value, onChange, type ='text'}) => {
  return (
    <input 
    placeholder={placeholder}
    type={type} 
    value={value}
    onChange={onChange} 
    className={styles.input}
    />
  )
}

export default Feild