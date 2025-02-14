import React from 'react';
import ProductCard from '../components/ProductCard'; // Caminho relativo

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Produto 1', price: 'R$ 49,99', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Produto 2', price: 'R$ 79,99', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Produto 3', price: 'R$ 129,99', image: 'https://via.placeholder.com/150' },
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
