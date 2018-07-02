import * as React from 'react';

import { IProduct } from '../api/Product';

import { Input } from './Input';
import Product from './Product';
import { UnList } from './UnList';
import { VSpace } from './VSpace';

interface IProps {
  products: IProduct[];
  filter: string;
  onFilter: (filter: string) => void;
}

class Products extends React.PureComponent<IProps> {
  public updateFilter = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.onFilter(e.currentTarget.value);
  };

  public render() {
    return (
      <VSpace>
        <Input
          type="search"
          value={this.props.filter}
          onInput={this.updateFilter}
        />

        {this.props.products.length > 0 ? (
          <UnList>
            {this.props.products.map(p => (
              <li key={p.id}>
                <Product product={p} />
              </li>
            ))}
          </UnList>
        ) : (
          <p>
            No products in this category{this.props.filter &&
              ` matching "${this.props.filter}"`}
          </p>
        )}
      </VSpace>
    );
  }
}

export default Products;
