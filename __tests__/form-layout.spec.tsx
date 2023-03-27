import React from 'react';
import { render } from '@testing-library/react';
import FormLayout from '../src/components/form-layout';

it('should render form', () => {
  const { getByText } = render(<FormLayout />);
  const linkElement = getByText(/First name:/);
  expect(linkElement).toBeInTheDocument();
});
it('should render form', () => {
  const { getByText } = render(<FormLayout />);
  const linkElement = getByText(/Last name:/);
  expect(linkElement).toBeInTheDocument();
});
