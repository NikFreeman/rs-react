import React from 'react';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { render } from '@testing-library/react';
import { server } from '../src/mocks/server';

import AppRoutes from '../src/routes/routes';
import { store } from '../src/store';
import { BrowserRouter } from 'react-router-dom';

const apiData = [
  { name: 'Mark Zuckerberg', age: '34' },
  { name: 'Elon Musk', age: '44' },
];
server.use(
  rest.get(`https://api.unsplash.com/search/photos`, (req, res, ctx) => {
    return res(ctx.json(apiData));
  })
);

describe('test route component', () => {
  it('render Home', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });
});
