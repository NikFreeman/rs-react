import Card from './card';
import { Component } from 'react';
import data from '../data/products';
import { Product } from '../models/products';

interface ProductState {
  products: Product[];
}

export default class CardList extends Component<unknown, ProductState> {
  state = { products: data };

  render() {
    const cards = this.state.products.map((item) => {
      return <Card product={item} key={item.id} />;
    });
    return (
      <div role="list" className="max-w-5xl mx-auto flex flex-wrap flex-row">
        {cards}
      </div>
    );
  }
}
