import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Caminho relativo

const ProductDetailPage = () => {
  const { id } = useParams();
  const products = [
    { id: 1, name: 'Produto 1', price: 'R$ 49,99', image: 'https://via.placeholder.com/150', description: 'Descrição do Produto 1' },
    { id: 2, name: 'Produto 2', price: 'R$ 79,99', image: 'https://via.placeholder.com/150', description: 'Descrição do Produto 2' },
    { id: 3, name: 'Produto 3', price: 'R$ 129,99', image: 'https://via.placeholder.com/150', description: 'Descrição do Produto 3' },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--text-primary)' }}>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', borderRadius: '8px' }} />
      <p style={{ color: 'var(--text-secondary)' }}>{product.price}</p>
      <p style={{ color: 'var(--text-secondary)' }}>{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
