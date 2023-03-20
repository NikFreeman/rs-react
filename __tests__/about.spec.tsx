import React from 'react';
import { render } from '@testing-library/react';

import About from '../src/pages/about';

describe('test About component', () => {
  it('render About', () => {
    const { getByText } = render(<About />);
    const linkElement = getByText(/Lorem/i);
    expect(linkElement).toBeInTheDocument();
  });
});
