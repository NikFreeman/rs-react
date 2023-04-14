import React from 'react';
import { render } from '@testing-library/react';

import Modal from '../src/components/modal';
import testData from '../src/data/mockData/testData';

describe('render Card component', () => {
  const handleClose = jest.fn();
  it('test title', () => {
    const { getByText } = render(<Modal photo={testData} onClose={handleClose} />);
    const linkElement = getByText(/#minsk/i);
    expect(linkElement).toBeInTheDocument();
  });
});
