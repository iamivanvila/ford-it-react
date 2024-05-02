import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//borrar despues
import imgMiniCar from '../img/miniCars';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carrousel.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import miniCars from '../img/miniCars';


function Carrousel(props) {

  return (
    <>
      <div className="container">

        {/* <img src={props.img} alt="slide_image" /> */}

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false} //true
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >

         
          <SwiperSlide>
            <div src={props.img} alt="slide_imagen" />
            <h5 className='nameCar'>{props.title}</h5>
          </SwiperSlide>

          {/* <SwiperSlide>
            <img src={props.img} alt="slide_imagen" />
            <h5 className='nameCar'>{props.title}</h5>
          </SwiperSlide> */}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </Swiper>

      </div>
    </>
  )
}

export default Carrousel;
