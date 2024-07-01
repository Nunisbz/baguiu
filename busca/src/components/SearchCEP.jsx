import React, { useState } from 'react';

const SearchCEP = ({ setCep, fetchAddress }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setCep(inputValue);
    fetchAddress(inputValue);
  };

  return (
    <div className="search-cep">
      <input 
        type="text" 
        placeholder="Digite o CEP" 
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchCEP;
