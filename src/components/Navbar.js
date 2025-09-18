import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CartIcon = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  return (
    <Link className="nav-link" to="/cart">
      🛒 Carrinho ({total})
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>Amazon Clone</h1>
      <nav>
        <Link className="nav-link" to="/">Início</Link>
        <Link className="nav-link" to="/products">Produtos</Link>
        <CartIcon />
      </nav>
    </header>
  );
};

export default Navbar;