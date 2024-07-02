import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Bem-vindo!</h1>
      <div className="buttons">
        <Link to="/buscar-cep">
          <button>Buscar CEPs</button>
        </Link>
        <Link to="/buscar-cachorro">
          <button>Buscar Cachorro</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
