import React from 'react';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { render } from '@testing-library/react';
import { server } from '../src/mocks/server';

import AppRoute from '../src/routes/routes';
import { store } from '../src/store';

const apiData = [
  { name: 'Mark Zuckerberg', age: '34' },
  { name: 'Elon Musk', age: '44' },
];
server.use(
  rest.get(`*`, (req, res, ctx) => {
    return res(ctx.json(apiData));
  })
);

describe('test route component', () => {
  it('render Home', () => {
    const { getByText } = render(
      <Provider store={store}>
        <AppRoute />
      </Provider>
    );
    const linkElement = getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });
});
