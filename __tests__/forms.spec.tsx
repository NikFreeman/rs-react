import React from 'react';
import { render } from '@testing-library/react';

import Form from '../src/pages/forms';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
  const initialState = { dataForm: { data: [] } };
  const mockStore = configureStore();
  let store;
  it('should render form', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const linkElement = getByText(/First name/i);
    expect(linkElement).toBeInTheDocument();
  });
});
