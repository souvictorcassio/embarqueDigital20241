import React, { useState } from 'react';
import { useFavorites } from './FavoritesContext';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const [showPrepTime, setShowPrepTime] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorited = favorites.some(fav => fav.id === recipe.id);

  const togglePrepTime = () => {
    setShowPrepTime(!showPrepTime);
  };

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  const defaultImage = '/images/default_image.jpg'; // Imagem padrão

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image || defaultImage} alt={recipe.title} className="recipe-image" />
      <div className="recipe-details">
        <div className="recipe-summary">{recipe.summary}</div>
        <button onClick={togglePrepTime}>Ver Receita</button>
        {showPrepTime && (
          <div className="recipe-info">
            <h4>Ingredientes:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h4>Modo de Preparo:</h4>
            <ol>
              {recipe.preparation_method.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
        <button onClick={handleFavoriteClick}>{isFavorited ? 'Desfavoritar' : 'Favoritar'}</button>
      </div>
    </div>
  );
};

export default RecipeCard;