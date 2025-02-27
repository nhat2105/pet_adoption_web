import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/index.css"
import MainLayout from './components/MainLayout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
