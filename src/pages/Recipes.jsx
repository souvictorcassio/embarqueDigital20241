import React, { useState, useEffect } from 'react';
import RecipeList from '../components/recipes/RecipeList';
import SearchBar from '../components/recipes/SearchBar';
import CategoryFilter from '../components/recipes/CategoryFilter';
import Pagination from '../components/recipes/Pagination';
import recipesData from '../recipes.json';
import './Recipes.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;

  useEffect(() => {
    
    const sortedRecipes = [...recipesData.recipes].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setRecipes(sortedRecipes);
  }, []);

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? recipe.category === selectedCategory : true)
  );

  // Paginação
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="recipes-page">
      <div className="filter-container">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }} />
      </div>
      <RecipeList recipes={currentRecipes} />
      <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default Recipes;
// Paginação