import './LinksHeader.css';
import React from 'react';
import LinkItem from './LinkItem'
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function LinksHeader() {

    return (
        <div className='LinksHeaderText'>
            <LinkItem title="Acquista su Ford" />
            <LinkItem title="Ford Business" />
            <LinkItem title="Veicoli Commercialli" />

            <div className='IconLink'>
                <FaUserCircle/>
                <LinkItem title="Log in / Registrati" />
            </div>

            <div className='IconLink'>
                <FaSearch/>
                <LinkItem  title="Cerca" />
            </div>
        </div>
    )
}

export default LinksHeader;
