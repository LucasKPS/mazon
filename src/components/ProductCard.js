import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;