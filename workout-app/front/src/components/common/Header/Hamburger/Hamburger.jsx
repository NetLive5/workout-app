import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from './menuBase'

import hamburgerImage from '../../../../images/header/hamburger.svg'
import hamburgerCloseImage from '../../../../images/header/hamburger-close.svg'

import styles from './Hamburger.module.scss'
import { useAuth } from '../../../ui/hooks/useAuth'
import { useOutsideAlerter } from '../../../ui/hooks/useOutsideAlerter'


const Hamburger = () => {
  const {setIsAuth} = useAuth()
  const {ref, isComponentVisible, setIsComponentVisible} = useOutsideAlerter(false)

  const handelLogout = () =>{
    localStorage.removeItem('token')
    setIsAuth(true)
    setIsComponentVisible(false)
  }

    return (
    <div className={styles.wrapper} ref={ref}>
        <button 
        type='button' 
        onClick={()=>setIsComponentVisible(!isComponentVisible)
        }>

            <img
            src={isComponentVisible ? hamburgerCloseImage 
            : hamburgerImage} 
            alt='Menu' 
            height='24'
            />
        </button>
        <nav className={`${styles.menu} ${isComponentVisible ? styles.show : ''}`}>
        <ul>
            {menu.map((item, idx) => (
            <li key={`_menu_${idx}`}>
                <Link to={item.link}>{item.title}</Link>
            </li>
            ))}
            <li>
                <button onClick={handelLogout}>Logout</button>
            </li>      
        </ul>
        </nav>
    </div>
  )
}

export default Hamburger