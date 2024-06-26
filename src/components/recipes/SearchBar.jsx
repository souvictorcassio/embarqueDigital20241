// SearchBar.jsx
import React from 'react';
import './styles/SearchBar.css';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Pesquisar receitas..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;