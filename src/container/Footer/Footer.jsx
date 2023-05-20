import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding' id='reserva'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'> Contactanos </h1>
        <p className='p__opensans'> Av Plaza 680, 7610658 Las Condes, Región Metropolitana </p>
        <p className='p__opensans'>+56 9-1234-1234</p>
        <p className='p__opensans'>+56 9-1234-1235</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="logo" />
        <p className='p__opensans'>"Si tú lo deseas puedes volar, sólo tienes que confiar mucho en ti y seguir, puedes contar conmigo, te doy todo mi apoyo" Steve Jobs</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'> Horario de apertura </h1>
        <p className='p__opensans'>Lunes a Viernes:</p>
        <p className='p__opensans'>10:00 am - 10:01 am</p>
        <p className='p__opensans'>Sabado y Domingo:</p>
        <p className='p__opensans'>10:00 am - 10:02 am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'> 2023 Liechtenstein. Todos los derechos reservados </p>
    </div>
  </div>
);

export default Footer;
