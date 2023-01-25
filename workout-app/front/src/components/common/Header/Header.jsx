import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hamburger from './Hamburger/Hamburger';


import styles from './Header.module.scss'
import userImage from '../../../images/header/user.svg'
import arrowImage from '../../../images/header/arrow.svg'
import authImage from '../../../images/header/dumbbell.svg'
import { useAuth } from '../../ui/hooks/useAuth'



const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const { isAuth } = useAuth()
    
    return (
        <header className={styles.header}>  
            {location.pathname !== '/' ? (
        <button 
            type='button' 
            onClick={()=> navigate(-1)
        }>
        <img src={arrowImage} alt='back'/>
    </button>
    ) : (
    <button 
        type='button' 
        onClick={ () => navigate(isAuth ? '/profile' : '/auth')
    }>
        <img src={isAuth ? authImage : userImage} alt='Auth' height='40'/>
    </button>
    )}
        <Hamburger />
    </header>
    )
}

export default Header