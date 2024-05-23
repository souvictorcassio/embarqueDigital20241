import React, { useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';




 const myImages = [
    'img/Carrossel/img001.jpg',
    'img/Carrossel/img002.jpg',
    'img/Carrossel/img003.jpg',
    'img/Carrossel/img004.jpg',
    'img/Carrossel/img005.jpg',
    'img/Carrossel/img006.jpeg'
];

function Carrossel() {

  const carrossel = useRef();
  const [sizeWindow, setSizeWindow] = useState(0);

  useEffect(() => {
  
    setSizeWindow(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
  })

  return (
    <div className="batata">
      {}
      <motion.div className='carrosselContainer' ref={carrossel} whileTap={{cursor: 'grabbing'}}>
        <motion.div 
          className='carrossel'
          drag='x'
          dragConstraints={{right: 0, left: -sizeWindow}}
          initial={{x: 100}}
          animate={{x: 0}}
          transition={{duration: 0.6}}
        >

          {myImages.map((img, index) => (
            <motion.div key={index} className='image'>
              <img src={img} alt='Nome Imagem' />
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

    </div>
  );
}

export default Carrossel;