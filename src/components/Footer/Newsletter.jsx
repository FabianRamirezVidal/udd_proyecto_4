import { useState } from 'react';
import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../constants/firebase';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const initialStateValues = {
    name: '',
    date: '',
    time: '',
    number: '',
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validar que se hayan completado todos los campos
    if (Object.values(values).every(value => value.trim() !== '')) {
      try {
        // Guardar los datos en Firestore
        await addDoc(collection(db, 'reservas'), values);
        alert('Reserva guardada con éxito');
      } catch (error) {
        alert('Ha ocurrido un error al guardar su reserva: ' + error);
      }
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='Reserva' />
        <h1 className='headtext__cormorant'>Disfruta de la mejor comida</h1>
        <p className='p__opensans'>Asegura tu mesa</p>
      </div>
      <form className='app__newsletter-input flex__center' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Ingresa tu nombre y apellido'
          name='name'
          onChange={handleInputChange}
        />
        <input type='date' placeholder='Día' name='date' onChange={handleInputChange} />
        <input type='time' placeholder='Hora' name='time' onChange={handleInputChange} />
        <input
          type='number'
          placeholder='Numero de personas'
          name='number'
          onChange={handleInputChange}
        />
        <button className='custom__button'>Reservar</button>
      </form>
    </div>
  );
};

export default Newsletter;
