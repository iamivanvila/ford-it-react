import './NavMiddle.css';
import React from 'react';
import ItemMenu from './ItemMenu.js'

function NavMiddle() {

    return (
        <div className='BarMenu'>
            <ItemMenu title="VEICOLI"/>
            <p>|</p>
            <ItemMenu title="FINANZIAMENTI & PROMOZIONI"/>
            <p>|</p>
            <ItemMenu title="VEICOLI IBRIDI & ELETTRICI"/>
            <p>|</p>
            <ItemMenu title="TECNOLOGIA"/>
            <p>|</p>
            <ItemMenu title="ASSITENZA"/>
            <p>|</p>
            <ItemMenu title="SUPPORTO"/>
        </div>
    )
}

export default NavMiddle;
