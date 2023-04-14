import React from 'react';
import { render, screen, within } from '@testing-library/react';
import CardList from './../src/components/card-list';
import { testDataArray } from '../src/data/mockData/testData';

it('should render list', () => {
  render(<CardList items={testDataArray} />);
  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(2);
});
