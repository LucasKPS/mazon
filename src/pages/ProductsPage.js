import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Controle sem fio DualSense Midnight Black', price: 'R$ 398,97', image: 'https://m.media-amazon.com/images/I/61WRPyQAIIL._AC_SX679_.jpg' },
    { id: 2, name: 'Smart TV 4K 65" LG QNED 65QNED80T', price: 'R$ 4.083,05', image: 'https://m.media-amazon.com/images/I/61E2-ioXeIL._AC_SY355_.jpg' },
    { id: 3, name: 'Havit HV-H2232d - Fone de Ouvido Gamer', price: 'R$ 109,90', image: 'https://m.media-amazon.com/images/I/516HwNOJoUL._AC_SX466_.jpg' },
  ];

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-list">
          {products.map((product) => (
            <div className="product-card-wrapper" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;