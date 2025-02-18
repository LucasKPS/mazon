// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid var(--light-gray)',
      borderRadius: '8px',
      padding: '1rem',
      textAlign: 'center',
      maxWidth: '300px',
      margin: '0 auto',
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%', // A imagem ocupará 100% da largura do container
          height: '200px', // Defina uma altura fixa para o container da imagem
          borderRadius: '8px',
          objectFit: 'contain', // A imagem se ajusta sem cortar
          backgroundColor: '#f0f0f0', // Cor de fundo para espaços vazios (opcional)
        }}
      />
      <h3 style={{ margin: '1rem 0', color: 'var(--primary-color)' }}>{product.name}</h3>
      <p style={{ color: 'var(--text-color)' }}>{product.price}</p>
    </div>
  );
};

export default ProductCard;