import React from 'react';
import styles from './Header.module.scss'

import userImage from '../../../images/header/user.svg'
import Hamburger from './Hamburger/Hamburger';


const Header = () => {
    return (
    <header className={styles.header}>
    <button type='button'>
        <img src={userImage} alt='Auth'/>
    </button>
    <Hamburger />
    </header>
)
}

export default Header