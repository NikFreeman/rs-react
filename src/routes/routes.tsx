import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/not-found';
import About from '../pages/about';
import Home from '../pages/home';
import Header from '../components/header';
import Form from '../pages/forms';
import { Provider } from 'react-redux';
import { store } from '../store';

function AppRoutes() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default AppRoutes;
