import React from 'react';
import './InfoCard.css';

const InfoCard = ({ restaurant, onClose }) => {
    return (
        <div className="info-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>&times;</button>
            <h2>{restaurant.title}</h2>
            <p>{restaurant.summary}</p>
            <h3>História</h3>
            {restaurant["history of"].map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
};

export default InfoCard;