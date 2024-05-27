// src/components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrosel.css'; // Adicione estilos personalizados

const Carrosel = ({ title, images }) => {
    return (
        <div className="carousel-section">
            <h2>{title}</h2>
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={600}
                stopOnHover={true}
                showStatus={false}
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel-image-container">
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Carrosel;