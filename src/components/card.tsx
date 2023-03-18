import React from 'react';
import { Product } from '../models/products';

interface CardProps {
  products: Product;
}

export default class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render(): React.ReactNode {
    const {
      title,
      thumbnail,
      category,
      brand,
      price,
      stock,
      rating,
      discountPercentage,
      description,
    } = this.props.products;
    return (
      <div className="w-60 border rounded-lg m-5 p-3 bg-gradient-to-b from-cyan-100 to-blue-400 flex-auto">
        <div className="font-fatface text-center font-bold text-orange-600 ">{title}</div>
        <img className="rounded-lg" src={thumbnail} />
        <div className="bg-slate-300 my-3 px-2 rounded-lg">
          <div className=" text-base ">
            <span className="font-fatface text-sm text-orange-700">category:</span> {category}
          </div>
          <hr />
          <div className=" text-base ">
            <span className="font-fatface text-sm text-orange-700">brand:</span>
            {brand}
          </div>
          <hr />
          <div className="flex gap-5">
            <div className=" text-base font-bold">
              <span className="font-fatface text-sm font-normal text-orange-700">Price:</span>
              {price}
            </div>
            <div className=" text-base font-bold">
              <span className="font-fatface text-sm font-normal text-orange-700">Stock:</span>
              {stock}
            </div>
          </div>
          <hr />
          <div className=" text-base ">
            <span className="font-fatface text-sm text-orange-700">Rating:</span> {rating}
          </div>
          <hr />
          <div className=" text-base ">
            <span className="font-fatface text-sm text-orange-700">Discount:</span>
            {discountPercentage}%
          </div>
          <hr />
          <div className=" text-xs ">
            <span className="font-fatface text-sm text-orange-700">description:</span> {description}
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
