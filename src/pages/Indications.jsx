// src/App.js
import React from 'react';
import Carrosel from '../components/Indications/Carrosel.jsx';


const Indications = () => {
    const foodImages = [
        'img/Indications/DSC_1071.jpg',
        'img/Indications/DSC_1072.jpg',
        'img/Indications/DSC_1073.jpg',
        'img/Indications/DSC_1074.jpg',
        'img/Indications/DSC_1075.jpg',

        
    ];

    const dessertImages = [
        'path_to_image1.jpg',
        'path_to_image2.jpg',
        'path_to_image3.jpg',
        'path_to_image4.jpg',
        'path_to_image5.jpg'
    ];

    const rodizioImages = [
        'path_to_image1.jpg',
        'path_to_image2.jpg',
        'path_to_image3.jpg',
        'path_to_image4.jpg',
        'path_to_image5.jpg'
    ];

    const deliveryImages = [
        'path_to_image1.jpg',
        'path_to_image2.jpg',
        'path_to_image3.jpg',
        'path_to_image4.jpg',
        'path_to_image5.jpg'
    ];

    return (
        <div className="App">
            <Carrosel title="Comidas Típicas" images={foodImages} />
            <Carrosel title="Sobremesas" images={dessertImages} />
            <Carrosel title="Rodízios" images={rodizioImages} />
            <Carrosel title="Delivery" images={deliveryImages} />
        </div>
    );
};

export default Indications;
