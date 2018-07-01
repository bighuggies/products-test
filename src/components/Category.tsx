import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { CategoryStore } from '../stores/CategoryStore';

interface IRouteParams {
  categoryId: string;
}

class Category extends React.Component<
  RouteComponentProps<IRouteParams> & { categoryStore: CategoryStore }
> {
  public render() {
    const category = this.props.categoryStore.getCategory(
      this.props.match.params.categoryId
    );

    return <div>{category ? category.title : 'Unkown category'}</div>;
  }
}

export default inject(CategoryStore.STORE_NAME)(observer(Category));
