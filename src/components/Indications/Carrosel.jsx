// src/components/Indications/Carrosel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrosel.css';

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
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} className="arrow arrow-prev">
                            &#10094;
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} className="arrow arrow-next">
                            &#10095;
                        </button>
                    )
                }
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel-image-container">
                        <a href={image.link} target="_blank" rel="noopener noreferrer" className="carousel-link">
                            <img src={image.src} alt={`Slide ${index}`} />
                        </a>
                        <div className="carousel-content">
                            <p>{image.title}</p>
                            <a href={image.link} target="_blank" rel="noopener noreferrer" className="btn">
                                Ver mais
                            </a>
                            <button className="btn">Favoritar</button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Carrosel;
