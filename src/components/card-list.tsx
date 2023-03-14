import Card from './card';
import React from 'react';
import data from '../data/products.json';

export default class CardList extends React.Component {
  render(): React.ReactNode {
    const cards = data.map((item) => {
      return (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          discountPercentage={item.discountPercentage}
          rating={item.rating}
          stock={item.stock}
          brand={item.brand}
          category={item.category}
          thumbnail={item.thumbnail}
        />
      );
    });
    return <div className="max-w-5xl mx-auto flex flex-wrap flex-row">{cards}</div>;
  }
}
