// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './global.css'; // Importe o arquivo de estilos globais
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);