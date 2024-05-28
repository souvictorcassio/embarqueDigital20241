import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const myImages = [
  'img/Carrossel/img004.jpg',
  'img/Carrossel/img005.jpg',
  'img/Carrossel/img006.jpeg'
];

function CarrosselDiscovery() {
  const carrossel = useRef();
  const [sizeWindow, setSizeWindow] = useState(0);

  useEffect(() => {
    setSizeWindow(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
  }, []);

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % myImages.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + myImages.length) % myImages.length);
  };

  return (
    <div className="carrossel-wrapper">
      <div className="batata">
        <button onClick={prevSlide} className="carousel-button">←</button>
        <motion.div className='carrosselContainer' ref={carrossel} whileTap={{ cursor: 'grabbing' }}>
          <motion.div
            className='carrossel'
            drag='x'
            dragConstraints={{ right: 0, left: -sizeWindow }}
            initial={{ x: 100 }}
            animate={{ x: -index * 400 }} // assuming each image is 400px wide
            transition={{ duration: 0.6 }}
          >
            {myImages.map((img, index) => (
              <motion.div key={index} className='image'>
                <img src={img} alt='Nome Imagem' />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <button onClick={nextSlide} className="carousel-button">→</button>
      </div>
    </div>
  );
}

export default CarrosselDiscovery;