import './LinkItem.css';
import React from 'react';

function LinkItem(props) {

    return (
        <>
           <h4 className='LinkItemText'>{props.title}</h4> 
        </>
    )
}

export default LinkItem;
