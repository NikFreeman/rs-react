import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../routes/routes';
import '../index.css';

const container = document.getElementById('app');

const FullApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
console.log('hot', import.meta.hot);
if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
