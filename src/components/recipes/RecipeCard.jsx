import React, { useState } from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const defaultImage = '/images/default_image.jpg'; // Imagem padrão

  return (
    <div className="recipe-card" style={{ zIndex: showDetails ? 10 : 1 }}>
      <h3>{recipe.title}</h3>
      <img src={recipe.image || defaultImage} alt={recipe.title} className="recipe-image" />
      <p>{recipe.summary}</p>
      <button onClick={toggleDetails}>Ver Receita</button>
      {showDetails && (
        <div className="recipe-details">
          <p><strong>Ingredientes:</strong></p>
          <ul className="ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p><strong>Modo de Preparo:</strong></p>
          <ul className="preparation-method">
            {recipe.preparation_method.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <p><strong>Tempo de preparo:</strong> {recipe.prepTime}</p>
        </div>
      )}
      <button>Favoritar</button>
    </div>
  );
};

export default RecipeCard;