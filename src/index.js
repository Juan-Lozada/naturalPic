import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ImagesState } from './Context/ContextGalery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImagesState>
      <App />
    </ImagesState>
  </React.StrictMode>
);

