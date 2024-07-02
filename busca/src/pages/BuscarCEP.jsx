import React, { useState } from 'react';
import SearchCEP from '../components/SearchCEP';
import AddressDisplay from '../components/AddressDisplay';

const BuscarCEP = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState('');

  const fetchAddress = async (cep) => {
    setError('');
    setAddress(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
      } else {
        setAddress(data);
      }
    } catch (error) {
      setError('Erro ao buscar o endereço');
    }
  };

  return (
    <div className="app">
      <h1>Busca de Endereço por CEP</h1>
      <SearchCEP setCep={setCep} fetchAddress={fetchAddress} />
      {error && <p className="error">{error}</p>}
      {address && <AddressDisplay address={address} />}
    </div>
  );
};

export default BuscarCEP;
