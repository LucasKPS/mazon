import React from 'react';
import ProductCard from '../components/ProductCard'; // Caminho relativo

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Controle sem fio DualSense Midnight Black', price: 'R$ 398,97', image: 'https://m.media-amazon.com/images/I/61WRPyQAIIL._AC_SX679_.jpg' },
    { id: 2, name: 'Smart TV 4K 65" LG QNED 65QNED80T Processador α5 Ger7 AI Quantum Dot Nanocell Local Dimming Design Super Slim Alexa/Chromecast integrado webOS 24', price: 'R$ 4.083,05', image: 'https://m.media-amazon.com/images/I/61E2-ioXeIL._AC_SY355_.jpg' },
    { id: 3, name: 'Havit HV-H2232d - Fone de Ouvido, Gamer, Iluminação RGB, com Microfone, Falante de 50mm, Conector 3.5mm', price: 'R$ 109,90', image: 'https://m.media-amazon.com/images/I/516HwNOJoUL._AC_SX466_.jpg' },
  ];

  return (
    <div>
      <h1>Nossos Produtos</h1>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
