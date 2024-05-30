// src/App.js
import React from 'react';
import Carrosel from '../components/Indications/Carrosel.jsx';

const Indications = () => {
    const foodImages = [
        { src: 'img/Indications/paraxaxa.jpg', link: 'https://www.parraxaxa.com.br', title: 'Paraxaxá' },
        { src: 'img/Indications/bodedono.jpg', link: 'https://bodedono.com.br', title: 'Bode do Nô' },
        { src: 'img/Indications/mocoto.jpg', link: 'https://mocoto.com.br', title: 'Mocotó' },
        { src: 'img/Indications/yemanja.jpg', link: 'https://www.instagram.com/restauranteyemanja/', title: 'Yemanjá' },
        { src: 'img/Indications/donafuo.jpg', link: 'https://donafulo.com.br', title: 'Dona Fulô' },
    ];


    return (
        <div className="App">
            <Carrosel title="Indicamos para você" images={foodImages} />
            
        </div>
    );
};

export default Indications;
