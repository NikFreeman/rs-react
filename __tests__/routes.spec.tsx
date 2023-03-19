import React from 'react';
import { render } from '@testing-library/react';

import AppRoute from './../src/routes/routes';

describe('test NavBar component', () => {
  it('render Home', () => {
    const { getByText } = render(<AppRoute />);
    const linkElement = getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });
});
