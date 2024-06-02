import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrosel.css';
import restaurantData from './restaurants.json';
import InfoCard from './InfoCard.jsx';

const Carrosel = ({ title, images }) => {
    const [isCardVisible, setCardVisible] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleSaibaMais = (id) => {
        const restaurant = restaurantData.restaurants.find(rest => rest.id === id);
        setSelectedRestaurant(restaurant);
        setCardVisible(true);
    };

    const closeCard = () => {
        setCardVisible(false);
        setSelectedRestaurant(null);
    };

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
                    <div key={index} className="carousel-image-container1">
                        <a href={image.link} target="_blank" rel="noopener noreferrer" className="carousel-link">
                            <img src={image.src} alt={`Slide ${index}`} />
                        </a>
                        <div className="carousel-content">
                            <p>{image.title}</p>
                            <a href={image.link} target="_blank" rel="noopener noreferrer" className="btn">
                                Acessar
                            </a>
                            <button className="btn" onClick={() => handleSaibaMais(index + 1)}>Saiba mais</button>
                        </div>
                    </div>
                ))}
            </Carousel>
            {isCardVisible && selectedRestaurant && (
                <div className="info-card-overlay" onClick={closeCard}>
                    <InfoCard restaurant={selectedRestaurant} onClose={closeCard} />
                </div>
            )}
        </div>
    );
};

export default Carrosel;