import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WrappedApp from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);

reportWebVitals();