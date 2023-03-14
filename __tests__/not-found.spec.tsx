import React from 'react';
import { render } from '@testing-library/react';

import NotFound from '../src/pages/not-found';

describe('test NotFound component', () => {
  it('render NotFound', () => {
    const { getByText } = render(<NotFound />);
    const linkElement = getByText(/404/i);
    expect(linkElement).toBeInTheDocument();
  });
});
