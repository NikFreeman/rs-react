import React from 'react';
import { render } from '@testing-library/react';

import Card from '../src/components/card';

describe('render Card component', () => {
  const testData = {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/1/thumbnail.jpg'],
  };
  it('test title', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/iPhone/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test price', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/Price/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test price value', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/549/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test category', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/Category:/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test category value', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/smartphones/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test brand', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/Brand:/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test brand value', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/Apple/);
    expect(linkElement).toBeInTheDocument();
  });
  it('test stock', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/Stock:/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test stock value', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/94/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test rating', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/Rating:/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test rating value', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/4.69/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test discount', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/Discount:/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test discount value', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/12.96%/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test description', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/Description:/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('test description value', () => {
    const { getByText } = render(<Card products={testData} />);
    const linkElement = getByText(/An apple mobile which is nothing like apple/i);
    expect(linkElement).toBeInTheDocument();
  });
});
