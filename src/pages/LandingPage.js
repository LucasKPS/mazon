import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar'; // Importando o Navbar componentizado

const LandingPage = () => {
  const featuredProduct = {
    id: 1,
    name: 'Controle sem fio DualSense Midnight Black',
    price: 'R$ 398,97',
    image: 'https://m.media-amazon.com/images/I/61WRPyQAIIL._AC_SX679_.jpg',
  };

  return (
    <div>
      <Navbar /> {/* Usando o Navbar componentizado */}
      
      <div className="landing-page">
        <h2>Produtos em Destaque</h2>
        
        <div className="featured-product-container">
          <div className="featured-product-wrapper">
            <ProductCard product={featuredProduct} />
          </div>
        </div>

        <Link to="/products">
          <button className="view-more-button">
            Ver mais produtos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;