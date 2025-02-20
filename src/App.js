import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Rota da Landing Page */}
        <Route path="/products" element={<ProductsPage />} /> {/* Rota da Página de Produtos */}
        <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Rota de Detalhes do Produto */}
      </Routes>
    </Router>
  );
};

export default App;