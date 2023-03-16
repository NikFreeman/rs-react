import Card from './card';
import React from 'react';
import data from '../data/products';
import { ProductProps } from '../models/products';

export default class CardList extends React.Component {
  constructor() {
    super();
    this.state = { products: data };
  }

  render(): React.ReactNode {
    const cards = this.state.products.map((item: ProductProps) => {
      return <Card product={item} key={item.product.id} />;
    });
    return <div className="max-w-5xl mx-auto flex flex-wrap flex-row">{cards}</div>;
  }
}
