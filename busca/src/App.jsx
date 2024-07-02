import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BuscarCEP from './pages/BuscarCEP';
import BuscarCachorro from './pages/BuscarCachorro';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/buscar-cep">Buscar CEPs</Link>
          </li>
          <li>
            <Link to="/buscar-cachorro">Buscar Cachorro</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar-cep" element={<BuscarCEP />} />
        <Route path="/buscar-cachorro" element={<BuscarCachorro />} />
      </Routes>
    </div>
  );
};

export default App;
