import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hamburger from './Hamburger/Hamburger';


import styles from './Header.module.scss'
import userImage from '../../../images/header/user.svg'
import arrowImage from '../../../images/header/arrow.svg'



const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    
    
    return (
    <header className={styles.header}>  
    {location.pathname !== '/' ? (
    <button type='button' onClick={()=> navigate(-1)}>
        <img src={arrowImage} alt='back'/>
    </button>
    ) : (
    <button type='button'>
        <img src={userImage} alt='Auth'/>
    </button>
    )}
        <Hamburger />
    </header>
    )
}

export default Header