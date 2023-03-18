import Card from './card';
import React from 'react';
import data from '../data/products';
import { Product } from '../models/products';

interface ProductState {
  products: Product[];
}

export default class CardList extends React.Component<unknown, ProductState> {
  state = { products: data };

  render(): React.ReactNode {
    const cards = this.state.products.map((item) => {
      return <Card products={item} />;
    });
    return <div className="max-w-5xl mx-auto flex flex-wrap flex-row">{cards}</div>;
  }
}
