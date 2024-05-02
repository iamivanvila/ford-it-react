import './TabsGroupsCars.css';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carrousel from './Carrousel'

//ver
import imgMiniCar from '../img/miniCars';
import miniCar from '../img/miniCar.json';


function TabsGroupsCars(props) {

  const items = [];

  return (
    <>

      <Tabs
        defaultActiveKey="tutte-le-auto"
        id="justify-tab-example"
        className="mb-3"
        variant='underline'
        justify
      >
        <Tab className='TitleTabs' eventKey="tutte-le-auto" title="TUTTE LE AUTO">

          <Carrousel>
            {miniCar.map( item => <Carrousel key={item.dir} item={item.name}/> )}
          </Carrousel>

          <Carrousel
            img={imgMiniCar.mini1}
            title="ecosport_prueba"
          />

          <Carrousel
          items={miniCar.map((item, index) => (
            <li key={index}>
              <img>{item.dir}</img>
              <p>{item.name}</p>
            </li>
          ))}
          />
         
        <Carrousel>
            {items.map((item, index) => (
              <li key={index}>
                {/* img={imgMiniCar.min17} */}

                {/* <img>{imgMiniCar.mini11}</img> */}

                img={item.img}

                {/* <img>{item.mini1}</img> */}

                {/* title={item.title} */}
              </li>
            ))}
        </Carrousel>
        
         
        </Tab>

        <Tab className='TitleTabs' eventKey="ibride-elettriche" title="IBRIDE & ELETTRICHE">
          ibride-elettriche
        </Tab>

        <Tab className='TitleTabs' eventKey="suv-crossover" title="SUV & CROSSOVER">
          suv-crossover
        </Tab>

        <Tab className='TitleTabs' eventKey="performance" title="PERFORMANCE">
          performance
        </Tab>

        <Tab className='TitleTabs' eventKey="monovolume" title="MONOVOLUME">
          monovolume
        </Tab>

        <Tab className='TitleTabs' eventKey="furgoni-pickup" title="FURGONI E PICKUP">
          furgoni-pickup
        </Tab>

      </Tabs>




    </>
  )
}

export default TabsGroupsCars;
