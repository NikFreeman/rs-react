import React from 'react';
import { render } from '@testing-library/react';
import FormLayout from '../src/components/form-layout';
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
        <FormLayout />
      </Provider>
    );
    expect(getByText(/First name:/)).toBeInTheDocument();
    expect(getByText(/Last name:/)).toBeInTheDocument();
    expect(getByText(/I consent to my personal data/)).toBeInTheDocument();
    expect(getByText(/Country:/)).toBeInTheDocument();
  });
});
