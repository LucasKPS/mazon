import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Seu carrinho está vazio.</div>;
  }

  // Função para garantir que o preço é sempre um número válido
  const getPrice = (item) => {
    const price = Number(item.price);
    return isNaN(price) ? 0 : price;
  };

  const total = cart.reduce((sum, item) => sum + getPrice(item) * item.qty, 0);

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 2px 16px #0001' }}>
      <h2 style={{ marginBottom: 24 }}>Seu Carrinho</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map(item => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 18,
              borderBottom: '1px solid #eee',
              paddingBottom: 12
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: 60, height: 60, objectFit: 'contain', marginRight: 18, borderRadius: 8, background: '#f4f4f4' }}
            />
            <div style={{ flex: 1 }}>
              <strong>{item.title}</strong>
              <div style={{ fontSize: 15, color: '#2C3E50', margin: '4px 0' }}>
                {item.qty}x R$ {getPrice(item).toFixed(2)}
              </div>
              <div style={{ fontSize: 14, color: '#888' }}>
                Subtotal: <b>R$ {(getPrice(item) * item.qty).toFixed(2)}</b>
              </div>
            </div>
            <button
              style={{
                marginLeft: 16,
                color: '#fff',
                background: '#FF6B6B',
                border: 'none',
                borderRadius: 6,
                padding: '4px 12px',
                cursor: 'pointer'
              }}
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <div style={{ fontWeight: 'bold', fontSize: 18, margin: '24px 0' }}>
        Total: R$ {total.toFixed(2)}
      </div>
      <button className="view-more-button" onClick={clearCart}>Limpar Carrinho</button>
    </div>
  );
};

export default CartPage;