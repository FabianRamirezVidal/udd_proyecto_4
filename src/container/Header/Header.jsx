import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      < SubHeading title="Conoce nuevos sabores" />
      <h1 className='app__header-h1'> La Llave para la mejor comida</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat rerum aut, vel deserunt, aliquid sit ducimus saepe, hic atque quas optio voluptate accusamus delectus. Ex pariatur quaerat iure dolores. </p>
      <button type='button' className='custom__button'>Ir al menú</button>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>

  </div>
);

export default Header;
