import { Component } from 'react';
import { Product } from '../models/products';

interface CardProps {
  product: Product;
}

export default class Card extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
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
    } = this.props.product;
    return (
      <div
        role="listitem"
        className="m-5 w-60 flex-auto rounded-lg border bg-gradient-to-b from-cyan-100 to-blue-400 p-3"
      >
        <div className="text-center font-fatface font-bold text-orange-600 ">{title}</div>
        <img className="mx-auto max-h-48 rounded-lg object-contain" src={thumbnail} />
        <div className="my-3 rounded-lg bg-slate-300 px-2">
          <div className=" text-base ">
            <span className="font-fatface text-sm text-orange-700">Category:</span> {category}
          </div>
          <hr />
          <div className=" text-base ">
            <span className="font-fatface text-sm text-orange-700">Brand:</span>
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
            <span className="font-fatface text-sm text-orange-700">Description:</span> {description}
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
