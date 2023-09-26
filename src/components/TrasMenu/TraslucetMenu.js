import React, { useState } from 'react';
import './TraslucetMenu.scss';

export const TraslucetMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [showImages1, setShowImages1] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const handleRectanguloClick = () => {
    setShowImages(true);

    setTimeout(() => {
      setShowImages(false);
    }, 3500);
  };

  const handleRectangulo1Click = () => {
    setShowImages1(true);

    setTimeout(() => {
      setShowImages1(false);
    }, 3500);
  };

  return (
    <div className='navar-traslucent-styles'>
      <nav className={`mask ${menuVisible ? 'visible' : ''}`}>
        <ul className='menu-list'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <button className='menu-hide-navbar' onClick={toggleMenu}>Menu</button>
      </nav>

      <div className='content'>
        <div className='rectangulo' onClick={handleRectanguloClick}>
          <img
            src='https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Imagen 1'
          />
          <h1>MANTENIMIENTO</h1>
          <h2>Descripción de la Categoría</h2>
        </div>
        <div className='rectangulo1' onClick={handleRectangulo1Click}>
          <img
            src='https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Imagen 2'
          />
          <h1>REFRIGERACIÓN</h1>
          <h2>Descripción de la Categoría</h2>
        </div>
      

        <div className='image-container'>
        {showImages && (
          <>
            <img
              src='https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Imagen 1'
              className='image'/>
             <img
              src='https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Imagen 2'
              className='image'/>
            <img
              src='https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Imagen 3'
              className='image'/>
              <p>Mantenimiento 1.1</p></>
        )}
        {showImages1 && (
          <>
            <img
              src='https://images.pexels.com/photos/11047221/pexels-photo-11047221.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Imagen 4'
              className='image'/>
            <img
              src='https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              alt='Imagen 5'
              className='image'/>
            <img
              src='https://images.pexels.com/photos/2582934/pexels-photo-2582934.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              alt='Imagen 6'
              className='image'/>
              <p>Refrigeración 1.1</p> </>
        )}
        </div>
      </div>
    </div>
  );
};
