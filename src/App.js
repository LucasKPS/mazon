// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      {/* Estilos globais aplicados ao layout principal */}
      <div style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;