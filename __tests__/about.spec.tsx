import React from 'react';
import { render } from '@testing-library/react';

import About from '../src/components/about';

describe('test NotFound component', () => {
  it('render NotFound', () => {
    const { getByText } = render(<About />);
    const linkElement = getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });
});
