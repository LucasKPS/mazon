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
    <div>
      {/* Navbar com título "Bem-vindo ao nosso E-commerce" */}
      <nav
        style={{
          backgroundColor: 'var(--primary-color)', 
          padding: '1rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ color: '#FFFFFF', margin: 0 }}>Bem-vindo ao nosso E-commerce</h1>
      </nav>

      {/* Conteúdo da Landing Page */}
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'var(--light-gray)', // Cor do fundo da landing page
        minHeight: '100vh', // Garante que ocupe a tela inteira
        display: 'flex', // Flexbox para centralização
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Produtos em Destaque</h2>

        <ProductCard product={featuredProduct} />

        <Link to="/products">
          <button
            style={{
              backgroundColor: 'var(--secondary-color)',
              color: 'var(--background-color)', // Cor de fundo do botão
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '1rem',
              transition: 'background-color 0.3s ease', // Efeito de hover suave
            }}
          >
            Ver mais produtos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
