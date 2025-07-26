// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ Import NavbarProvider
import { NavbarProvider } from './context/NavbarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ✅ Wrap App with NavbarProvider */}
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </React.StrictMode>
);
