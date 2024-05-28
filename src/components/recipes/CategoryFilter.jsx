// CategoryFilter.jsx
import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  const categories = ['Todas', 'Sobremesa', 'Lanche', 'Prato Principal'];

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category === 'Todas' ? '' : category)}
          className={category === (selectedCategory || 'Todas') ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;