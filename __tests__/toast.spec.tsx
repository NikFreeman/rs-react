import React from 'react';
import { render } from '@testing-library/react';

import Toast from '../src/components/toast';
it('test message', () => {
  const { getByText } = render(<Toast message="test message" />);
  const linkElement = getByText(/test message/i);
  expect(linkElement).toBeInTheDocument();
});
