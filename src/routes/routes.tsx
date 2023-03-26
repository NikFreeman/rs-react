import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/not-found';
import About from '../pages/about';
import Home from '../pages/home';
import HeaderWithRoute from '../components/header-hook';
import Form from '../pages/forms';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderWithRoute />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
