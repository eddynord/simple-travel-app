import React from 'react';
import './index.css';
import logo from './earth.png'


export default Header
function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='Logo'/>
            <p>my travel journal.</p>
        </header>
    )
}
    
    
    
    