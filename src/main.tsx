import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/not-found';
import About from './components/about';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <div>Hello React</div> },
  { path: '/about', element: <About /> },
  { path: '*', element: <NotFound /> },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
