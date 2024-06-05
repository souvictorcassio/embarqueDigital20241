import React from 'react';
import { useFavorites } from '../components/recipes/FavoritesContext';
import RecipeList from '../components/recipes/RecipeList';
import './FavoriteRecipes.css';

const FavoriteRecipes = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorite-recipes-page">
      <h1>Receitas Favoritas </h1>
      {favorites.length > 0 ? (
        <RecipeList recipes={favorites} />
      ) : (
        <p> Nenhuma  receita foi favoritada:/</p>
      )}
    </div>
  );
};

export default FavoriteRecipes;