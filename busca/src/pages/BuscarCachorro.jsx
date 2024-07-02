import React, { useState } from 'react';

const BuscarCachorro = () => {
  const [dogImage, setDogImage] = useState(null);
  const [error, setError] = useState('');

  const fetchDogImage = async () => {
    setError('');
    setDogImage(null);

    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search');
      const data = await response.json();
      setDogImage(data[0].url);
    } catch (error) {
      setError('Erro ao buscar a imagem do cachorro');
    }
  };

  return (
    <div className="app">
      <h1>Buscar Cachorro</h1>
      <button onClick={fetchDogImage}>Buscar Imagem de Cachorro</button>
      {error && <p className="error">{error}</p>}
      {dogImage && <img src={dogImage} alt="Imagem de um cachorro" />}
    </div>
  );
};

export default BuscarCachorro;
