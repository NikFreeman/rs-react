import Card from './card';
import data from '../data/products';
import { Product } from '../models/products';
import { useState } from 'react';

export default function CardList() {
  const [state] = useState(data);

  return (
    <div role="list" className="mx-auto flex max-w-5xl flex-row flex-wrap">
      {state.map((item: Product) => {
        return <Card product={item} key={item.id} />;
      })}
    </div>
  );
}
