import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { CategoryStore } from '../stores/CategoryStore';
import { ProductStore } from '../stores/ProductStore';

import Product from './Product';

interface IRouteParams {
  categoryId: string;
}

class Category extends React.Component<
  RouteComponentProps<IRouteParams> & {
    categoryStore: CategoryStore;
    productStore: ProductStore;
  }
> {
  public state = { filter: '' };

  public componentDidMount() {
    this.props.productStore.fetchProducts();

    this.props.categoryStore.selectCategory(this.props.match.params.categoryId);
  }

  public componentDidUpdate() {
    this.props.categoryStore.selectCategory(this.props.match.params.categoryId);
  }

  public updateFilter = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ filter: e.currentTarget.value });
  };

  public render() {
    return (
      <div>
        <input
          type="search"
          value={this.state.filter}
          onInput={this.updateFilter}
        />

        <ul>
          {this.props.productStore.categoryProducts
            .filter(
              c =>
                !this.state.filter ||
                c.title
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase()) ||
                c.description
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase())
            )
            .map(p => (
              <li key={p.id}>
                <Product product={p} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default inject(CategoryStore.STORE_NAME, ProductStore.STORE_NAME)(
  observer(Category)
);
