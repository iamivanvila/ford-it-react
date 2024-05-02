import './Logo.css';
import React from 'react';
import image from '../img/ford_oval_blue_logo.svg';

const Logo = () => {

    return (
        <div>
            <img className='logo' src={image} alt='logo_ford'/>
        </div>
    )
}

export default Logo;