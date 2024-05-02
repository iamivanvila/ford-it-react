import './Home.css';
import React from 'react';
import GalleryCar from './GalleyCar';
import imagenes from '../img/imagenes';
import Promo from './Promo'
import SectionTabsCars from './SectionTabsCars';
import TabsGroupsCars from './TabsGroupsCars'

function Home() {

  return (
    <div className='body'>
        <GalleryCar 
            img={imagenes.img1}
            back={imagenes.img1}
            title='NUOVO'
            titleStrong='EXPLORER'
            titleBis='100% ELETTRICO'
            subtitle='L ESPLORAZIONE CONTINUA'
            buttonWhite='Configura'
            buttonTransparent='Esplora il veicolo' 
        />
        <GalleryCar 
            img={imagenes.img2}
            back={imagenes.img2}
            title=''
            titleStrong='ECODAYS FORD CON TASO ZERO'
            titleBis=''
            subtitle='FORD RADDOPPIA LA ROTTAMAZIONE STATALE'
            buttonWhite='Scopri di più'
            buttonTransparent='USE STATE'
        />
        <GalleryCar 
            img={imagenes.img3}
            back={imagenes.img3}
            title=''
            titleStrong='ECOINCENTIVI FORD'
            titleBis=''
            subtitle='FINO A $13.200 DI ECOINCENTIVI'
            buttonWhite='Promozioni'
            buttonTransparent='USE STATE' 
        />
        <GalleryCar 
            img={imagenes.img4}
            back={imagenes.img4}
            title='FORD'
            titleStrong={<strong>KUGA</strong>}
            titleBis=''
            subtitle='FORD RADDOPPIA LA ROTTAMAZIONE STATALE'
            buttonWhite='Configura'
            buttonTransparent='Esplora il veicolo' 
        />
        <Promo
            text='$ 199 al mese anticipo $ 5.100. Durata 24 mesi e dopo puoi sostituirla o tenerla versando $ 28.397. TAN 3,95% TAEG 5,08%'
            />
        <GalleryCar 
            img={imagenes.img5}
            back={imagenes.img5}
            title=''
            titleStrong='MUSTANG MACH-E'
            titleBis=''
            subtitle='CON TASSO ZERO'
            buttonWhite='Richiedi Test Drive'
            buttonTransparent='Veicoli disponibili' 
        />
        <Promo
            text='$ 495 al mese, anticipo $ 6.500. Durata 36 mesi e dopo puoi sostituirla o tenerla versando $ 35.574. TAN 0% TAEG 0,52%'
        />
        <SectionTabsCars
            title='UN VEICOLO PER OGNI STILE DI VITA'
        />
        <TabsGroupsCars/>
        
    </div>
  )
}

export default Home;
