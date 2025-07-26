import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavbarProvider } from './context/NavbarContext'; // ✅ import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </React.StrictMode>
);
