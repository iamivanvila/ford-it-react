import './NavTop.css';
import React from 'react';
import Logo from './Logo'
import LinksHeader from './LinksHeader'

function NavTop() {

    return (
        <div className='HeaderNavTop'>
            <Logo/>
            <LinksHeader/>
        </div>
    )
}

export default NavTop;
