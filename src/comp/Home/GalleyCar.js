import './GalleryCar.css';
import React from 'react';

function GalleryCar(props) {

  return (
    <>
        <div className='BackgroundGalleryCar' style={{ backgroundImage:`url(${props.back})`}} src={props.img} alt={props.description}> 
            <h2 className='GalleryCarTitle'>{props.title} {props.titleStrong} {props.titleBis}</h2>
            <h3 className='GalleryCarSubtitle'>{props.subtitle}</h3>
            <button className='ButtonWhite'>{props.buttonWhite}</button>
            <button className='ButtonTransparent'>{props.buttonTransparent}</button>
        </div> 

    </>
  )
}

export default GalleryCar;
