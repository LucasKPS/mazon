import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Caminho relativo

const LandingPage = () => {
  const featuredProduct = {
    id: 1,
    name: 'Produto em Destaque',
    price: 'R$ 99,99',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div>
      <h1>Bem-vindo ao nosso E-commerce</h1>
      <ProductCard product={featuredProduct} />
      <Link to="/products">
        <button>Ver mais produtos</button>
      </Link>
    </div>
  );
};

export default LandingPage;
