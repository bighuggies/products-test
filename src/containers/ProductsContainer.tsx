import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Products from '../components/Products';
import { ProductStore } from '../stores/ProductStore';

interface IRouteParams {
  categoryId: string;
}

class ProductsContainer extends React.Component<
  RouteComponentProps<IRouteParams> & {
    productStore: ProductStore;
  }
> {
  public state = { filter: '' };

  public componentDidMount() {
    this.props.productStore.fetchProducts();

    this.selectCategory();
  }

  public componentDidUpdate() {
    this.selectCategory();
  }

  public resetFilter = () => {
    this.updateFilter('');
  };

  public selectCategory = () => {
    this.props.productStore.selectCategory(this.props.match.params.categoryId);
  };

  public updateFilter = (filter: string) => {
    this.props.productStore.filter = filter;
  };

  public render() {
    return (
      <Products
        products={this.props.productStore.filteredCategoryProducts}
        filter={this.props.productStore.filter}
        onFilter={this.updateFilter}
      />
    );
  }
}

export default inject(ProductStore.STORE_NAME)(observer(ProductsContainer));
