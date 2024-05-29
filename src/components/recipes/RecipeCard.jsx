import React, { useState } from 'react';
import { useFavorites } from './FavoritesContext';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorited = favorites.some(fav => fav.id === recipe.id);

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  const defaultImage = '/images/default_image.jpg';

  return (
    <>
      {showRecipe && <div className="overlay" onClick={toggleRecipe}></div>}
      <div className={`recipe-card ${showRecipe ? 'expanded' : ''}`}>
        <h3>{recipe.title}</h3>
        <img src={recipe.image || defaultImage} alt={recipe.title} className="recipe-image" />
        <div className="recipe-details">
          <div className="recipe-summary">{recipe.summary}</div>
          {showRecipe && (
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
        </div>
        <div className="recipe-buttons">
          <button onClick={toggleRecipe}>{showRecipe ? 'Ocultar Receita' : 'Ver Receita'}</button>
          <button onClick={handleFavoriteClick}>{isFavorited ? 'Desfavoritar' : 'Favoritar'}</button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;