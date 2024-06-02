import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Carrossel.css';

const myImages = [
  { src: 'img/Carrossel/acaraje_.jpg', link: '/recipes', title: 'Acarajé' },
  { src: 'img/Carrossel/bolo_de_rolo_.jpg', link: '/recipes', title: 'Bolo de Rolo' },
  { src: 'img/Carrossel/canjica_.png', link: '/recipes', title: 'Canjica' }
];

function CarrosselHero() {
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
    <div className="carousel-section">
      <div className="carousel-container">
        <button onClick={prevSlide} className="arrow arrow-prev">&#10094;</button>
        <motion.div className='carousel' ref={carrossel} whileTap={{ cursor: 'grabbing' }}>
          <motion.div
            className='carousel-track'
            drag='x'
            dragConstraints={{ right: 0, left: -sizeWindow }}
            initial={{ x: 0 }}
            animate={{ x: -index * 100 + '%' }}
            transition={{ duration: 0.5 }}
          >
            {myImages.map((image, idx) => (
              <motion.div key={idx} className='carousel-image-container'>
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img src={image.src} alt={image.title} />
                </a>
                <div className="carousel-content">
                  <p>{image.title}</p>
                  <a href={image.link} target="_blank" rel="noopener noreferrer" className="btn">Ver mais</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <button onClick={nextSlide} className="arrow arrow-next">&#10095;</button>
      </div>
      <div className="dots">
        {myImages.map((_, idx) => (
          <span key={idx} className={`dot ${index === idx ? 'active' : ''}`} onClick={() => setIndex(idx)}></span>
        ))}
      </div>
    </div>
  );
}

export default CarrosselHero;
