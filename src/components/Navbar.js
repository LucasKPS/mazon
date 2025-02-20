import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Nossos Produtos</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/products">Produtos</Link>
      </nav>
    </div>
  );
};

export default Navbar;