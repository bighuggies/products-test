import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CategoryMenu from '../components/CategoryMenu';
import { CategoryStore } from '../stores/CategoryStore';

import ProductsContainer from './ProductsContainer';

class CategoriesContainer extends React.Component<{
  categoryStore?: CategoryStore;
}> {
  public componentDidMount() {
    if (
      this.props.categoryStore &&
      this.props.categoryStore.categories.length <= 0
    ) {
      this.props.categoryStore.fetchCategories();
    }
  }

  public render() {
    return (
      this.props.categoryStore && (
        <Router>
          <div>
            <CategoryMenu />

            <Route path="/:categoryId" component={ProductsContainer} />
          </div>
        </Router>
      )
    );
  }
}

export default inject(CategoryStore.STORE_NAME)(observer(CategoriesContainer));
