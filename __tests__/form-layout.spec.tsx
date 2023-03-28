import React from 'react';
import { render } from '@testing-library/react';
import FormLayout from '../src/components/form-layout';

it('should render form', () => {
  const { getByText } = render(<FormLayout />);
  expect(getByText(/First name:/)).toBeInTheDocument();
  expect(getByText(/Last name:/)).toBeInTheDocument();
});
