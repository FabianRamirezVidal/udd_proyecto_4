import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contacto' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}> Encuentranos </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'> Av Plaza 680, 7610658 Las Condes, Región Metropolitana </p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}> Horario de apertura </p>
        <p className='p__opensans'> Lunes a Viernes: 10:00 am - 10:01 am </p>
        <p className='p__opensans'> Sabado y Domingo: 10:00 am - 10:02 am  </p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}> Visitanos </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
