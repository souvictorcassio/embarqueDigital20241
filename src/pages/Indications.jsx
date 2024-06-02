import React from 'react';
import Carrosel from '../components/Indications/Carrosel.jsx';

const Indications = () => {
    const foodImages = [
        { src: 'img/Indications/parraxaxa.jpg', link: 'https://www.parraxaxa.com.br', title: 'Paraxaxá' },
        { src: 'img/Indications/bodedono.jpg', link: 'https://bodedono.com.br', title: 'Bode do Nô' },
        { src: 'img/Indications/bar_do_cuscuz.jpg', link: 'https://www.instagram.com/bardocuscuzrecife/', title: 'Bar do Cuscuz' },
        { src: 'img/Indications/seu_luna.jpg', link: 'https://www.instagram.com/seulunarestaurante/', title: '(Bar do) Seu Luna' },
        { src: 'img/Indications/dona_fulo.png', link: 'https://donafulo.com.br', title: 'Dona Fulô' },
    ];


    return (
        <div className="App">
            <Carrosel title="Indicamos para você" images={foodImages} />   
        </div>
    );
};

export default Indications;
