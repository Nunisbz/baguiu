import React from 'react';

const AddressDisplay = ({ address }) => {
  return (
    <div className="address-display">
      <h2>Endereço</h2>
      <p><strong>Rua:</strong> {address.logradouro}</p>
      <p><strong>Bairro:</strong> {address.bairro}</p>
      <p><strong>Cidade:</strong> {address.localidade}</p>
      <p><strong>Estado:</strong> {address.uf}</p>
    </div>
  );
};

export default AddressDisplay;
