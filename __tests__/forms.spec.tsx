import React from 'react';
import { render } from '@testing-library/react';

import Form from '../src/pages/forms';

describe('test Form component', () => {
  it('render Form', () => {
    const { getByText } = render(<Form />);
    const linkElement = getByText(/First name/i);
    expect(linkElement).toBeInTheDocument();
  });
});
