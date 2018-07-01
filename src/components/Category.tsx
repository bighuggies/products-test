import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IRouteParams {
  categoryId: string;
}

const Category = ({ match }: RouteComponentProps<IRouteParams>) => (
  <div> {match.params.categoryId} </div>
);

export default Category;
