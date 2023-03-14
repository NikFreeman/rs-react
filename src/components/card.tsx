import React from 'react';
import { Product } from '../models/products';

type Prod = Omit<Product, 'images'>;

export default class Card extends React.Component<Prod> {
  constructor(props: Prod) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="w-60 border rounded-lg m-5 p-3 bg-gradient-to-b from-cyan-100 to-blue-400 ">
        <div className="font-fatface text-center font-bold text-orange-600 ">
          {this.props.title}
        </div>
        <img className="rounded-lg" src={this.props.thumbnail} />
        <div className="bg-slate-300 my-3 px-2 rounded-lg">
          <div className=" text-base ">
            {' '}
            <span className="font-fatface text-sm text-orange-700">category:</span>{' '}
            {this.props.category}
          </div>
          <hr />
          <div className=" text-base ">
            {' '}
            <span className="font-fatface text-sm text-orange-700">brand:</span> {this.props.brand}
          </div>
          <hr />
          <div className="flex gap-5">
            <div className=" text-base font-bold">
              {' '}
              <span className="font-fatface text-sm font-normal text-orange-700">Price:</span>{' '}
              {this.props.price}
            </div>
            <div className=" text-base font-bold">
              {' '}
              <span className="font-fatface text-sm font-normal text-orange-700">Stock:</span>{' '}
              {this.props.stock}
            </div>
          </div>
          <hr />
          <div className=" text-base ">
            {' '}
            <span className="font-fatface text-sm text-orange-700">Rating:</span>{' '}
            {this.props.rating}
          </div>
          <hr />
          <div className=" text-base ">
            {' '}
            <span className="font-fatface text-sm text-orange-700">Discount:</span>{' '}
            {this.props.discountPercentage}%
          </div>
          <hr />
          <div className=" text-xs ">
            {' '}
            <span className="font-fatface text-sm text-orange-700">description:</span>{' '}
            {this.props.description}
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
