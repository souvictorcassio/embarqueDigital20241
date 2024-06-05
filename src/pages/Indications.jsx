import React from 'react';
import Carrosel from '../components/Indications/Carrosel.jsx';
import './Indications.css';

const Indications = () => {
    const foodImages = [
        { src: '../embarqueDigital20241/img/Indications/parraxaxa.jpg', link: 'https://www.parraxaxa.com.br', title: 'Paraxaxá' },
        { src: '../embarqueDigital20241/img/Indications/bodedono.jpg', link: 'https://bodedono.com.br', title: 'Bode do Nô' },
        { src: '../embarqueDigital20241/img/Indications/bar_do_cuscuz.jpg', link: 'https://www.instagram.com/bardocuscuzrecife/', title: 'Bar do Cuscuz' },
        { src: '../embarqueDigital20241/img/Indications/seu_luna.jpg', link: 'https://www.instagram.com/seulunarestaurante/', title: '(Bar do) Seu Luna' },
        { src: '../embarqueDigital20241/img/Indications/dona_fulo.png', link: 'https://donafulo.com.br', title: 'Dona Fulô' },
    ];

    return (
        <div className="App">
            <div className="explanation-text">
                <p>Explore as melhores opções de gastronomia que destacam a cultura e os sabores únicos da região Nordeste.</p>
            </div>
            <Carrosel title="Indicamos para você" images={foodImages} />
        </div>
    );
};

export default Indications;