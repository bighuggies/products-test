import { observer } from 'mobx-react';
import * as React from 'react';

import { IProduct } from '../models/Product';

import Product from './Product';

interface IProps {
  products: IProduct[];
  filter: string;
  onFilter: (filter: string) => void;
}

class Products extends React.Component<IProps> {
  public updateFilter = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.onFilter(e.currentTarget.value);
  };

  public render() {
    return (
      <div>
        <input
          type="search"
          value={this.props.filter}
          onInput={this.updateFilter}
        />

        <ul>
          {this.props.products.map(p => (
            <li key={p.id}>
              <Product product={p} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default observer(Products);
