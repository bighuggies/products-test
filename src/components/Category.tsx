import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { CategoryStore } from '../stores/CategoryStore';
import { ProductStore } from '../stores/ProductStore';

interface IRouteParams {
  categoryId: string;
}

class Category extends React.Component<
  RouteComponentProps<IRouteParams> & {
    categoryStore: CategoryStore;
    productStore: ProductStore;
  }
> {
  public componentDidMount() {
    this.props.productStore.fetchProducts();
  }

  public componentDidUpdate() {
    this.props.categoryStore.selectCategory(this.props.match.params.categoryId);
  }

  public render() {
    return (
      <ul>
        {this.props.productStore.categoryProducts.map(p => (
          <li key={p.id}> {p.title} </li>
        ))}
      </ul>
    );
  }
}

export default inject(CategoryStore.STORE_NAME, ProductStore.STORE_NAME)(
  observer(Category)
);
