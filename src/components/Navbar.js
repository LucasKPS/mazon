// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Nossos Produtos</h1>
      <nav>
        <Link to="/" className="nav-link">Início</Link>
        <Link to="/products" className="nav-link">Produtos</Link>
      </nav>
    </div>
  );
};

export default Navbar;
