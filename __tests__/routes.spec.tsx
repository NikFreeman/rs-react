import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import AppRoute from './../src/routes/routes';

describe('test NavBar component', () => {
  const initialState = { dataForm: { data: [] } };
  const mockStore = configureStore();
  let store;
  it('render Home', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <AppRoute />
      </Provider>
    );
    const linkElement = getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });
});
