import React from 'react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // Converte o preço string ("R$ 398,97") para número (398.97)
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    return Number(priceStr.replace('R$', '').replace('.', '').replace(',', '.').trim());
  };

  const handleBuy = () => {
    addToCart({
      ...product,
      title: product.name, // Para manter compatibilidade com o carrinho
      price: parsePrice(product.price)
    });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button
        className="view-more-button"
        onClick={handleBuy}
      >
        Comprar
      </button>
    </div>
  );
};

export default ProductCard;