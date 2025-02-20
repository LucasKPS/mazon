// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Caminho relativo

const LandingPage = () => {
  const featuredProduct = {
    id: 1,
    name: 'Controle sem fio DualSense Midnight Black',
    price: '398,97',
    image: 'https://m.media-amazon.com/images/I/61WRPyQAIIL._AC_SX679_.jpg',
  };

  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: 'var(--light-gray)',
    }}>
      <h1 style={{ color: 'var(--primary-color)' }}>Bem-vindo ao nosso E-commerce</h1>
      <ProductCard product={featuredProduct} />
      <Link to="/products">
        <button
          style={{
            backgroundColor: 'var(--secondary-color)',
            color: 'var(--background-color)',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
        >
          Ver mais produtos
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;