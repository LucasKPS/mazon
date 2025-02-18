// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './global.css'; // Importação correta do global.css
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);