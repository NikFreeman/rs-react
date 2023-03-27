import React from 'react';
import { render, screen, within } from '@testing-library/react';
import CardList from './../src/components/card-list';

it('should render list', () => {
  render(<CardList />);
  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(99);
});
