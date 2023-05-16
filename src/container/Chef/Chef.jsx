import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title='En la palabra del chef' />
      <h1 className='headtext__cormorant'> En lo que creemos </h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis error, vero ipsum aliquam inventore minus labore harum, sint laborum a molestias impedit sit doloribus, voluptate expedita numquam. Pariatur, dicta asperiores!</p>
        </div>
        <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ex nisi ea quasi sapiente earum ullam molestias iusto quaerat eveniet, animi quis doloremque vitae soluta dolores ratione, cumque repellendus accusantium?</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kun Lao</p>
        <p className='p__opensans'>Chef y peleador de Mortal Kombat</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>

  </div>
);

export default Chef;
